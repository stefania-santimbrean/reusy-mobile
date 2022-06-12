import { Post, RootTabScreenProps } from '../types';

import DefaultSwipeCards from '../components/SwipeCards';
import { View } from '../components/Themed';
import { useContext, useEffect } from 'react';
import API from '../services/API.class';
import AppContext from '../components/AppContext';
import React from 'react';
import { ActivityIndicator, Alert, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Colors from '../constants/Colors';
import * as Location from 'expo-location';


export default function FeedScreen({ navigation }: RootTabScreenProps<'Feed'>) {

    const { accessToken, setAccessToken } = useContext(AppContext);
    const [posts, setPosts] = React.useState([]);
    const [location, setLocation] = React.useState({});
    const [errorMsg, setErrorMsg] = React.useState('');
    const [search, setSearch] = React.useState('');
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                Alert.alert(errorMsg);
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            console.log(location);


        })();
    }, [])

    useEffect(() => {
        (async () => {
            const api = new API();
            api.readPosts(accessToken, location, search).then((result) => {
                setPosts(result);
            }).catch((err) => {
                console.log(err);
            })
        })();
    }, [location, search])

    return (
        <View>
            <SearchBar
                containerStyle={styles.search}
                onChangeText={setSearch}
                value={search}></SearchBar>
            {posts.length === 0 ? <ActivityIndicator animating={true} size="large" color="#00ff00" /> :
                <DefaultSwipeCards style={{ flex: 1 }} posts={posts} />}
        </View>
    );
}

const styles = StyleSheet.create({
    search: {
        color: Colors.dark.tint,
    }
});
import { Post, RootTabScreenProps } from '../types';

import DefaultSwipeCards from '../components/SwipeCards';
import { View } from '../components/Themed';
import { useContext, useEffect } from 'react';
import API from '../services/API.class';
import AppContext from '../components/AppContext';
import React from 'react';
import { ActivityIndicator } from 'react-native';

export default function FeedScreen({ navigation }: RootTabScreenProps<'Feed'>) {

    const { accessToken, setAccessToken } = useContext(AppContext);
    const [posts, setPosts] = React.useState([]);
    useEffect(() => {
        const api = new API();
        api.readPosts(accessToken).then((result) => {
            setPosts(result);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <View>
            {posts.length === 0 ? <ActivityIndicator animating={true} size="large" color="#00ff00" /> :
                <DefaultSwipeCards style={{ flex: 1 }} posts={posts} />}
        </View>
    );
}

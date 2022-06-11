import React, { useEffect } from 'react';
import { Alert, Pressable, StyleSheet } from 'react-native';
import { LatoText } from '../components/StyledText';
import { LatoTextInput } from '../components/StyledTextInput';
import { Icon } from "@rneui/themed";
import * as Location from 'expo-location';
import { ScrollView, View } from '../components/Themed';

import { RootTabScreenProps } from '../types';
import Colors from '../constants/Colors';

export default function CreatePostScreen({ navigation }: RootTabScreenProps<'CreatePost'>) {
    const [title, onChangeTitle] = React.useState("");
    const [description, onChangeDescr] = React.useState("");
    const [transportDetails, onChangeTranspDetails] = React.useState("");

    const onPressCreatePost = () => {
        Alert.alert("TODO: Call API for creating a post!");
    }

    const onPressLocation = () => {
        navigation.navigate('Map');
    }
    const [location, setLocation] = React.useState({});
    const [errorMsg, setErrorMsg] = React.useState('');

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
      }, []);
    
      let text = 'Waiting..';
      if (errorMsg) {
        text = errorMsg;
      } else if (location) {
        text = JSON.stringify(location);
      }
    return (
        <ScrollView style={styles.container}>
            <LatoText style={styles.text}>Title</LatoText>
            <LatoTextInput
                style={styles.input}
                onChangeText={onChangeTitle}
            />
            <LatoText style={styles.text}>Description</LatoText>
            <LatoTextInput
                style={styles.input}
                onChangeText={onChangeDescr}
            />
            <LatoText style={styles.text}>Upload pictures</LatoText>
            {/* <LatoTextInput
                style={styles.input}
                onChangeText={onChangePassword}
            /> */}
            <LatoText style={styles.text}>Transport details</LatoText>
            <LatoTextInput
                style={styles.input}
                onChangeText={onChangeTranspDetails}
            />
            <Icon name='my-location' reverse={true} onPress={onPressLocation}/>
            <Pressable style={styles.singUpButton} onPress={onPressCreatePost}>
                <LatoText style={styles.signUpText}>Post</LatoText>
            </Pressable>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    signUp: {
        fontSize: 60,
        fontWeight: 'bold',
        textAlign: 'left',
        paddingBottom: 30,
        alignItems: 'flex-start'
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        alignItems: 'flex-start'
    },
    input: {
        fontSize: 20,
        height: 45,
        marginVertical: 12,
        borderWidth: 2,
        borderRadius: 2,
        borderColor: Colors.dark.border,
        padding: 10,
        alignItems: 'flex-start',
        color: Colors.dark.text
    },
    button: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        backgroundColor: Colors.dark.border,
        borderColor: Colors.dark.border,
        height: 45,
        borderRadius: 4,
        marginTop: 10
    },
    singUpButton: {
        fontWeight: 'bold',
        alignItems: 'flex-end',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: Colors.dark.background,
        height: 45,
        borderRadius: 4,
        marginBottom: 10
    },
    signUpText: {
        fontSize: 25,
        alignItems: 'flex-end',
        borderRadius: 4,
    }
});

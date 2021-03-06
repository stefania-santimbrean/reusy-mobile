import React from 'react';
import { Alert, Pressable, StyleSheet } from 'react-native';
import { LatoText } from '../components/StyledText';
import { LatoTextInput } from '../components/StyledTextInput';

import { View } from '../components/Themed';

import { RootStackScreenProps } from '../types';
import Colors from '../constants/Colors';
import API from '../services/API.class';


export default function SignUpScreen({ navigation }: RootStackScreenProps<'SignUp'>) {
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const [firstName, onChangeFirstName] = React.useState("");
    const [lastName, onChangeLastName] = React.useState("");
    const [phone, onChangePhone] = React.useState("");

    const onPressSignUp = async () => {
        try {
            const api = new API();
            await api.register({ email, password, firstName, lastName, phone})
            navigation.navigate('Login');
        } catch (err) {
            Alert.alert('Sign up failed, please try again!');
        }
    }
    return (
        <View style={styles.container}>
            <LatoText style={styles.signUp}>Sign Up</LatoText>
            <LatoText style={styles.text}>Email</LatoText>
            <LatoTextInput
                style={styles.input}
                onChangeText={onChangeEmail}
            />
            <LatoText style={styles.text}>Password</LatoText>
            <LatoTextInput
                style={styles.input}
                onChangeText={onChangePassword}
            />
            <LatoText style={styles.text}>First name</LatoText>
            <LatoTextInput
                style={styles.input}
                onChangeText={onChangeFirstName}
            />
            <LatoText style={styles.text}>Last name</LatoText>
            <LatoTextInput
                style={styles.input}
                onChangeText={onChangeLastName}
            />
            <LatoText style={styles.text}>Phone number</LatoText>
            <LatoTextInput
                style={styles.input}
                onChangeText={onChangePhone}
            />
            <Pressable style={styles.button} onPress={onPressSignUp}>
                <LatoText style={styles.text}>Sign Up</LatoText>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
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
        fontSize: 15,
        alignItems: 'flex-end',
        borderRadius: 4,
    },
});

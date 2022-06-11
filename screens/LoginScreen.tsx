import React, { useContext } from 'react';
import { Alert, Pressable, StyleSheet } from 'react-native';
import { LatoText } from '../components/StyledText';
import { LatoTextInput } from '../components/StyledTextInput';

import { View } from '../components/Themed';

import { RootStackScreenProps } from '../types';
import Colors from '../constants/Colors';
import API from '../services/API.class';
import AppContext from '../components/AppContext';

export default function LoginScreen({ navigation }: RootStackScreenProps<'Login'>) {
  const {accessToken} = useContext(AppContext);
  if (accessToken !== "") {
    navigation.navigate('Root')
  }
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const onPressSignIn = async () => {
    try {
      const api = new API();
      await api.login({ email, password });
      const user = await api.readProfile();
      navigation.navigate('Root')
    } catch (err) {
      Alert.alert('Log in failed, please try again!');
    }
  }
  const onPressSignUp = () => {
    navigation.navigate('SignUp');
  }
  return (
    <View style={styles.container}>
      <LatoText style={styles.signIn}>Sign In</LatoText>
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
      <Pressable style={styles.button} onPress={onPressSignIn}>
        <LatoText style={styles.text}>Log In</LatoText>
      </Pressable>
      <Pressable style={styles.singUpButton} onPress={onPressSignUp}>
        <LatoText style={styles.signUpText}>Sign Up</LatoText>
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
  signIn: {
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 100,
    paddingBottom: 50,
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

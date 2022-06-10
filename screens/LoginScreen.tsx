import React from 'react';
import { Alert, Pressable, StyleSheet } from 'react-native';
import { TitanText } from '../components/StyledText';
import { TitanTextInput } from '../components/StyledTextInput';

import { View } from '../components/Themed';

import { RootTabScreenProps } from '../types';
import Colors from '../constants/Colors';
import Login from '../services/Login.class';

export default function LoginScreen({ navigation }: RootTabScreenProps<'Login'>) {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const onPressSignIn = () => {
    console.log(email + password);
    Alert.alert(email);
    const loginAPI = new Login();
    loginAPI.login(email, password);
  }
  const onPressSignUp = () => {
    console.log(email + password);
  }
  return (
    <View style={styles.container}>
      <TitanText style={styles.signIn}>Sign In</TitanText>
      <TitanText style={styles.text}>Email</TitanText>
      <TitanTextInput
        style={styles.input}
        onChangeText={onChangeEmail}
      />
      <TitanText style={styles.text}>Password</TitanText>
      <TitanTextInput
        style={styles.input}
        onChangeText={onChangePassword}
      />
      <Pressable style={styles.button} onPress={onPressSignIn}>
        <TitanText style={styles.text}>Log In</TitanText>
      </Pressable>
      <Pressable style={styles.singUpButton} onPress={onPressSignUp}>
        <TitanText style={styles.signUpText}>Sing Up</TitanText>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 10
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

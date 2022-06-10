import React from 'react';
import { StyleSheet } from 'react-native';
import { TitanText } from '../components/StyledText';

import { TextInput, Text, View } from '../components/Themed';

import { RootTabScreenProps } from '../types';

export default function LoginScreen({ navigation }: RootTabScreenProps<'Login'>) {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  return (
    <View style={styles.container}>
      <TitanText style={styles.signIn}>Sign In</TitanText>
      <TitanText style={styles.text}>Email</TitanText>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
      />
      <TitanText style={styles.text}>Password</TitanText>
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
      />
      <TitanText style={styles.signUp}>Sign Up</TitanText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signIn: {
    fontSize: 60,
    fontWeight: 'bold',
    justifyContent: 'flex-start'
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    alignItems: 'flex-start'
  },
  input: {
    fontSize: 20,
    height: 45,
    margin: 12,
    borderWidth: 1,
    padding: 10,

  },
  signUp: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'flex-end'
  }
});

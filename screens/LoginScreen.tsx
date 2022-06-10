import { DarkTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { TitanText } from '../components/StyledText';
import { TitanTextInput } from '../components/StyledTextInput';

import { TextInput, Text, View } from '../components/Themed';

import { RootTabScreenProps } from '../types';
import Colors from '../constants/Colors';

export default function LoginScreen({ navigation }: RootTabScreenProps<'Login'>) {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
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
    alignItems: 'flex-end'
  }
});

import { TextInput, TextInputProps } from './Themed';

export function TitanTextInput(props: TextInputProps)  {
  return <TextInput {...props} style={[props.style, { fontFamily: 'titan-one' }]} />;
}

export function LatoTextInput(props: TextInputProps)  {
  return <TextInput {...props} style={[props.style, { fontFamily: 'lato' }]} />;
}
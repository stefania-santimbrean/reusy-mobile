import { Text, TextProps } from './Themed';

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
}

export function TitanText(props: TextProps)  {
  return <Text {...props} style={[props.style, { fontFamily: 'titan-one' }]} />;
}

export function LatoText(props: TextProps)  {
  return <Text {...props} style={[props.style, { fontFamily: 'lato' }]} />;
}
/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import NotFoundScreen from '../screens/NotFoundScreen';
import LoginScreen from '../screens/LoginScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import SignUpScreen from '../screens/SignUpScreen';
import CreatePostScreen from '../screens/CreatePostScreen';
import MapScreen from '../screens/MapScreen';
import FeedScreen from '../screens/FeedScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Group>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      {/* <BottomTab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Login',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerTintColor: Colors[colorScheme].tint
        }}
      /> */}
      {/* <BottomTab.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          title: 'Sign Up',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerTintColor: Colors[colorScheme].tint
        }}
      /> */}
      <BottomTab.Screen
        name="CreatePost"
        component={CreatePostScreen}
        options={{
          title: 'Create new post',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerTintColor: Colors[colorScheme].tint
        }}
      />
      <BottomTab.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: 'Choose a location',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerTintColor: Colors[colorScheme].tint
        }}
      />
      <BottomTab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          title: 'Feed',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerTintColor: Colors[colorScheme].tint
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

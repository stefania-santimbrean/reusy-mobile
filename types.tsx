/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  Login: undefined;
  SignUp: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  CreatePost: undefined;
  Map: undefined;
  Feed: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type LoginUser = {
  email: string,
  password: string
}

export type loginResponse = {
  data: {
    accessToken: string
  }
}

export type RegisterUser = {
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  phone: string
}

export type UserProfile = {
  email: string,
  firstName: string,
  lastName: string,
  phone: string
}

export type registerResponse = {
  data: UserProfile
}
export type Location = {
  lat: Float32Array,
  long: Float32Array
}

export type Post = {
  name: string,
  description: string,
  transportDetails: string
  imageUrls: [],
  location: Location
}

export type ResponsePost = {
  data: Post & {
    createdAt: string,
    postId: string
  }
}

export type ResponseMultiplePost = {
  data: [Post & {
    createdAt: string,
    postId: string
  }]
}
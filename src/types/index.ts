import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigatorScreenParams, ParamListBase } from "@react-navigation/native";

type Show = {
  available: number;
};

export type Character = {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  urls: string[];
  thumbnail: string;
  events: Show;
  comics: Show;
  series: Show;
  stories: Show;
};

export type NavigationProps = {
  Home: undefined;
  Details: {
    character: Character;
  };
};

export type StackNavigation = NativeStackNavigationProp<NavigationProps>;

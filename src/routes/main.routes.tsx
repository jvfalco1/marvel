import React, { FC } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Details from "../screens/Details";
import { NavigationProps } from "../types";
import HeaderLeft from "../components/navigation/headerLeft";

const Stack = createNativeStackNavigator<NavigationProps>();

const Main: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTransparent: true,
        headerTitle: "",
        headerLeft: ({ canGoBack }) => (canGoBack ? <HeaderLeft /> : null),
        animation: "fade",
      }}
    >
      <Stack.Screen component={Home} name="Home" />
      <Stack.Screen component={Details} name="Details" />
    </Stack.Navigator>
  );
};

export default Main;

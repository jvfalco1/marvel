import React, { FC } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Details from "../screens/Details";

const Stack = createNativeStackNavigator();

const Main: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen component={Home} name="Home" />
      <Stack.Screen component={Details} name="Details" />
    </Stack.Navigator>
  );
};

export default Main;

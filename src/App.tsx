import React from "react";
import { StatusBar } from "react-native";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import MainRoutes from "./routes/main.routes";

import { Provider } from "react-redux";

const NavContainer = () => {
  const navigationRef = useNavigationContainerRef();

  return (
    <NavigationContainer ref={navigationRef}>
      <MainRoutes />
    </NavigationContainer>
  );
};

function App(): JSX.Element {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar barStyle={"light-content"} />
      <NavContainer />
    </QueryClientProvider>
  );
}

export default App;

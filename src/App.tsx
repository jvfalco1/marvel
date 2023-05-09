import React, { useEffect } from "react";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";

import MainRoutes from "./routes/main.routes";
import api from "./configs/axios";

const NavContainer = () => {
  const navigationRef = useNavigationContainerRef();

  useEffect(() => {
    async function teste() {
      const teste = await api.get("characters");
    }
    teste();
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <MainRoutes />
    </NavigationContainer>
  );
};

function App(): JSX.Element {
  return <NavContainer />;
}

export default App;

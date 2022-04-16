import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationDrawer from "./src/navigation/NavigationDrawer";
import NavigationTab from "./src/navigation/NavigationTab";
import NavigationStack from "./src/navigation/NavigationStack";
import { AuthProvider } from "./src/context/AuthContext";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <NavigationStack />
      </AuthProvider>
    </NavigationContainer>
  );
}

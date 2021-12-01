import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationDrawer from "./src/navigation/NavigationDrawer";
import NavigationTab from "./src/navigation/NavigationTab";

export default function App() {
  return (
    <NavigationContainer>
      <NavigationTab />
    </NavigationContainer>
  );
}

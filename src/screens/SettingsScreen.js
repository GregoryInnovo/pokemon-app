import React from "react";
import { View, Text, Button } from "react-native";

export default function SettingsScreen(props) {
  const { navigation } = props;
  const goToPage = (pageName) => {
    navigation.navigate(pageName);
  };
  return (
    <View>
      <Text>Este es setting screen</Text>
      <Button title="Ir a atrás" onPress={() => goToPage("Home")} />
    </View>
  );
}

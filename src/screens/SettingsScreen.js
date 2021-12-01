import React from "react";
import { SafeAreaView, View, Text, Button } from "react-native";

export default function SettingsScreen(props) {
  const { navigation } = props;
  const goToBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView>
      <Text>Este es setting screen</Text>
      <Button title="Ir a atrás" onPress={goToBack} />
    </SafeAreaView>
  );
}

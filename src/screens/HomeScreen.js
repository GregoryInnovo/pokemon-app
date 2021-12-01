import React from "react";
import { SafeAreaView, View, Text, Button } from "react-native";

export default function HomeScreen(props) {
  const { navigation } = props;
  const goToPage = () => {
    navigation.navigate("Settings");
  };

  console.log(props);
  return (
    <SafeAreaView>
      <Text>ESTAMOS EN HOMESCREEN</Text>
      <Button title="Ir a ajustes" onPress={goToPage} />
    </SafeAreaView>
  );
}

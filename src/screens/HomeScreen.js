import React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen(props) {
  const { navigation } = props;
  const goToPage = () => {
    navigation.navigate("Settings");
  };

  console.log(props);
  return (
    <View>
      <Text>ESTAMOS EN HOMESCREEN</Text>
      <Button title="Ir a ajustes" onPress={goToPage} />
    </View>
  );
}

import React from "react";
import { View, Text } from "react-native";

export default function Pokemon(props) {
  const { route, navigation } = props;
  return (
    <View>
      <Text>Estamos mostrando un pokemon</Text>
    </View>
  );
}

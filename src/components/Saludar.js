import React from "react";
import { View, Text } from "react-native";

export default function Saludar(props) {
  const { firstName, lastName } = props;
  return (
    <View>
      <Text>
        Hola {firstName} {lastName}
      </Text>
    </View>
  );
}

Saludar.defaultProps = {
  firstName: "Gregson",
  lastName: "Murcia Castro",
};

import React from "react";
import { View, Text, Button, TextInput } from "react-native";

export default function LoginForm() {
  return (
    <View>
      <Text>Component Login Form</Text>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Contraseña" />
      <Button tittle="Enviar" onPres={() => console.log("Me presionaste")} />
    </View>
  );
}

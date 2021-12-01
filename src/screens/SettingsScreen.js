import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function SettingsScreen(props) {
  const { navigation } = props;
  const goToBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Text>Este es setting screen</Text>
      <Button title="Ir a atrás" onPress={goToBack} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

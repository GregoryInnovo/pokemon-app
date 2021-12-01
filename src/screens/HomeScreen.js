import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function HomeScreen(props) {
  const { navigation } = props;
  const goToPage = () => {
    navigation.navigate("Settings");
  };

  console.log(props);
  return (
    <View style={styles.container}>
      <Text>ESTAMOS EN HOMESCREEN</Text>
      <Button title="Ir a ajustes" onPress={goToPage} />
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

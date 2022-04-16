import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function test() {
  return (
    <View styles={styles.container}>
      <Text styles={styles.text}>test</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontWeight: "bold",
    color: "red",
  },
});

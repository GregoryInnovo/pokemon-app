import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonsApi } from "../api/pokemon";
export default function Pokedex() {
  useEffect(() => {
    // ()() function anonima auto ejecutada
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <Text>Pokédex</Text>
    </SafeAreaView>
  );
}

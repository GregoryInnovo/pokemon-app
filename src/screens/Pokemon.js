import React, { useState, useEffect } from "react";
import { getPokemonDetailsApi } from "../api/pokemon";
import { View, Text } from "react-native";

export default function Pokemon(props) {
  const {
    navigation,
    route: { params },
  } = props;

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;

  return (
    <View>
      <Text>Estamos mostrando un pokemon</Text>
      <Text>{pokemon.name}</Text>
    </View>
  );
}

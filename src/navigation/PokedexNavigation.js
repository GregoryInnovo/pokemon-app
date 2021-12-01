import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PokedexScreen from "../screens/Pokedex";
import PokemonScreen from "../screens/Pokemon";

const Stack = createStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator initialRouteName="Pokédex">
      <Stack.Screen name="Pokédex" component={PokedexScreen} />
      <Stack.Screen name="Pokémon" component={PokemonScreen} />
    </Stack.Navigator>
  );
}

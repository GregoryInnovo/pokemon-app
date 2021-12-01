import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/pokemon";
export default function Pokedex() {
  // state and function to setState  = initialState
  const [pokemons, setPokemons] = useState([]);
  console.log(pokemons);
  useEffect(() => {
    // ()() function anonima auto ejecutada
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi();

      const pokemonsArray = [];
      for await (const pokemon of response.results) {
        const pokemonDetailts = await getPokemonDetailsByUrlApi(pokemon.url);
        pokemonsArray.push({
          id: pokemonDetailts.id,
          name: pokemonDetailts.name,
          type: pokemonDetailts.types[0].type.name,
          order: pokemonDetailts.order,
          image:
            pokemonDetailts.sprites.other["official-artwork"].front_default,
        });
      }
      // if the split operator dont exist we are saying ave an array in an array
      setPokemons([...pokemons, ...pokemonsArray]);
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

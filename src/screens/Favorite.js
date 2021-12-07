import React, { useState, useCallback } from "react";
import { Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonFavoriteApi } from "../api/favorite";
import { getPokemonDetailsApi } from "../api/pokemon";
import useAuth from "../hooks/useAuth";
import PokemonList from "../components/PokemonList";
import NoLogged from "../components/NoLogged";

export default function Favorite() {
  const [pokemons, setPokemons] = useState([]);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          try {
            const response = await getPokemonFavoriteApi();

            const pokemonsArray = [];
            for await (const id of response) {
              const pokemonDetailts = await getPokemonDetailsApi(id);

              pokemonsArray.push({
                id: pokemonDetailts.id,
                name: pokemonDetailts.name,
                type: pokemonDetailts.types[0].type.name,
                order: pokemonDetailts.order,
                image:
                  pokemonDetailts.sprites.other["official-artwork"]
                    .front_default,
              });
            }
            setPokemons(pokemonsArray);
          } catch (err) {
            console.log(err);
          }
        })();
      }
    }, [auth])
  );

  return !auth ? (
    <NoLogged />
  ) : (
    <SafeAreaView>
      <PokemonList pokemons={pokemons} />
    </SafeAreaView>
  );
}

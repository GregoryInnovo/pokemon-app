import React, { useState, useEffect } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
  addPokemonFavoriteApi,
  isPokemonFavoriteApi,
} from "../../api/favorite";

export default function Favorite(props) {
  const { id } = props;
  const [isFavorite, setIsFavorite] = useState(undefined);
  const [realoadCheck, setRealoadCheck] = useState(false);
  const Icon = isFavorite ? FontAwesome : FontAwesome5;

  useEffect(() => {
    (async () => {
      try {
        const response = await isPokemonFavoriteApi(id);
        setIsFavorite(response);
      } catch (err) {
        setIsFavorite(false);
      }
    })();
  }, [id, realoadCheck]);

  const onRealoadCheckFavorite = () => {
    setRealoadCheck((prev) => !prev);
  };

  const addFavorite = async () => {
    try {
      await addPokemonFavoriteApi(id);
      onRealoadCheckFavorite();
    } catch (err) {
      console.log(err);
    }
  };

  const removeFavorite = async () => {
    console.log("Eliminar de favoritos");
  };

  return (
    <Icon
      name="heart"
      color="#fff"
      size={20}
      onPress={isFavorite ? removeFavorite : addFavorite}
      style={{ marginRight: 20 }}
    />
  );
}

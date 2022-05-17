/** @format */

import { useEffect, useState } from "react";

const STORAGE_KEYS = {
  FAVORITES: "FAVORITES",
};

export const getFavorites = () => {
  const storedFavorites = localStorage.getItem(STORAGE_KEYS.FAVORITES);
  if(storedFavorites) {
    return JSON.parse(storedFavorites);
  } else {
    return []
  }
}

export function useFavoriteItem(id, category) {
  const [isFavorite, setIsFavortie] = useState(false);

  const updateFavorites = (newFavorites) => {
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(newFavorites));
  }

  const addToFavorite = () => {
    const newFavorites = [...getFavorites(), {id, category}]
    updateFavorites(newFavorites);
    setIsFavortie(true);
  }
  const removeFromFavorite = () => {
    const newFavorites = getFavorites().filter(item => item.id !== id);
    updateFavorites(newFavorites);
    setIsFavortie(false)
  }

  useEffect(() => {
    const found = getFavorites().find(item => item.id === id);
    if(found) {
      setIsFavortie(true)
    }
  }, [id]);

  return [isFavorite, addToFavorite, removeFromFavorite];
}
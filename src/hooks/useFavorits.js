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

function useFavorits() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = getFavorites();
    setFavorites(storedFavorites);
  }, [])

  const updateFavorites = (newFavorites) => {
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(newFavorites));
    setFavorites(newFavorites)
  }

  return [favorites, updateFavorites]
}

export function useFavoriteItem(id, category) {
  const [favorites, setFavorites] = useFavorits();
  const [isFavorite, setIsFavortie] = useState(false);

  const addToFavorite = () => {
    const newFavorites = [...getFavorites(), {id, category}]
    setFavorites(newFavorites);
    setIsFavortie(true);
  }
  const removeFromFavorite = () => {
    const newFavorites = favorites.filter(item => item.id !== id);
    setFavorites(newFavorites);
    setIsFavortie(false)
  }

  useEffect(() => {
    const found = favorites.find(item => item.id === id);
    if(found) {
      setIsFavortie(true)
    }
  }, [favorites, id]);

  return [isFavorite, addToFavorite, removeFromFavorite];
}
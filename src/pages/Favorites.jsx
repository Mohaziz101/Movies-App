import React from 'react'
import { useEffect, useState } from 'react';
import tmdbApi from '../api/tmdbApi';
import MovieCard from '../components/movie-card/MovieCard';
import PageHeader from '../components/page-header/PageHeader'
import { getFavorites } from '../hooks/useFavoriteItems'

export default function Favorites() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const removeItem = (id) => {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
  }

  useEffect(() => {
    const favorites = getFavorites();
    async function fetchFavorits() {
      const resItems = await tmdbApi.getDetailList(favorites, { params: {} });
      setIsLoading(false);
      setItems(resItems);
    }
    fetchFavorits();
  }, []);
  return (
    <>
      <PageHeader>Favorites</PageHeader>
      <div className="container">
        <div className="section mb-3">
          {
            isLoading ? (
              <h2>Loading</h2>
            ) : !items.length ? (
              <h2>You don't have any items added</h2>
            ) : (
              <div className="movie-grid">
                {
                  items.map((item, i) => (
                    <MovieCard key={item.id} item={item} category={item.category} removeItem={removeItem} />
                  ))
                }
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}

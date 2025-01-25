import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { MovieCard } from "../components/MovieCard";

const searchUrl = import.meta.env.VITE_TMDB_SEARCH
const apiKey = import.meta.env.VITE_TMDB_API_KEY

import './MoviesGrid.css';
import { MovieProps } from "./Home";

export function Search() {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const query = searchParams.get('q');

  const getSearchedMovies = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();

    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryUrl = `${searchUrl}?api_key=${apiKey}&query=${query}`;
    getSearchedMovies(searchWithQueryUrl);
  }, [query])

  return (
    <main className="container">
        <h2 className="title">
          Results for: <span className="query-text">{query}</span>
        </h2>
        <div className="movies-container">
          {movies.length === 0 && <p>We didn't find any movies with this search</p>}
          {movies.length > 0 && movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
        </div>
    </main>
  );
}
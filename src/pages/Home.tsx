import { useState, useEffect } from "react";
import { MovieCard } from "../components/MovieCard";

import './MoviesGrid.css'

const moviesURL: string = import.meta.env.VITE_TMDB_API;
const apiKey: string = import.meta.env.VITE_TMDB_API_KEY;

export interface MovieProps {
  id: string;
  title: string;
  poster_path: string;
  vote_average: number;
  tagline: string;
  budget: number;
  revenue: number;
  runtime: number;
  overview: string;
}

export function Home() {
  const [topMovies, setTopMovies] = useState<MovieProps[]>([]);

  const getTopRatedMovies = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();

    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedMoviesUrl = `${moviesURL}top_rated?api_key=${apiKey}`;
    getTopRatedMovies(topRatedMoviesUrl);
  }, [])

  return(
    <main className="container">
      <h2 className="title">Top Rated Movies</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Loading...</p>}
        {topMovies.length > 0 && topMovies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </main>
  );
}
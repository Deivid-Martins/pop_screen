import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill
} from 'react-icons/bs'

import { MovieCard } from "../components/MovieCard";

import './Movie.css'
import { MovieProps } from "./Home";

const moviesURL: string = import.meta.env.VITE_TMDB_API;
const apiKey: string = import.meta.env.VITE_TMDB_API_KEY;

export function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieProps | null>(null)

  const getMovie = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();

    setMovie(data);
  };

  const formatCurrency = (number: number) => {
    return number.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  }

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?api_key=${apiKey}`;
    
    getMovie(movieUrl)
  }, [id])

  return(
    <div className="movie-page">
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />
          <p className="tagline">{movie.tagline}</p>
          <div className="info">
            <h3>
              <BsWallet2 /> Budget:
            </h3>
            <p>{formatCurrency(movie.budget)}</p>
          </div>

          <div className="info">
            <h3>
              <BsGraphUp /> Revenue:
            </h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </div>

          <div className="info">
            <h3>
              <BsHourglassSplit /> Runtime:
            </h3>
            <p>{movie.runtime} minutes</p>
          </div>

          <div className="info description">
            <h3>
              <BsFillFileEarmarkTextFill /> Overview:
            </h3>
            <p>{movie.overview}</p>
          </div>
        </>
      )}
    </div>
  );
}
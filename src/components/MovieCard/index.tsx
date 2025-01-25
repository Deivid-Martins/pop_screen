import { FaStar } from "react-icons/fa";
import { MovieProps } from "../../pages/Home";
import { Link } from "react-router-dom";

const imageUrl = import.meta.env.VITE_TMDB_IMG;

interface MovieCardProps {
  movie: MovieProps;
  showLink?: boolean
}

export function MovieCard ({ movie, showLink = true }: MovieCardProps) {
  return (
    <div className="movie-card">
      <img src={imageUrl + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <FaStar /> {movie.vote_average}
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Details</Link>}
    </div>
  );
}
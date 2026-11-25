import type { TypeMovie } from "../types/movieTypes";
import { MovieCard } from "./MovieCard";

type Props = {
  movies: TypeMovie[];
  loading: boolean;
  error: string | null;
};

export const MovieList = ({ movies, loading, error }: Props) => {
  if (loading) {
    return <p className="note">Caricamento film in corso...</p>;
  }

  if (error) {
    return <p className="note">Errore: {error}</p>;
  }

  if (movies.length === 0) {
    return <p className="note">Nessun film trovato.</p>;
  }

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
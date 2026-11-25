import { useEffect, useState } from "react";
import { getMovies } from "../api/tmdb";
import type { TypeMovie } from "../types/movieTypes";
import { MovieList } from "./MovieList";

export const MoviesSection = () => {
  const [movies, setMovies] = useState<TypeMovie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await getMovies();
        setMovies(data);
      } catch {
        setError("Errore nel caricamento dei film.");
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  return (
    <section>
      <h1 className="page-title">The Lord of the Rings</h1>
      <p className="page-sub">
        Risultati fissi da API · query=The Lord of the Rings · page=1 · max 20
        items · senza filtri / paginazione
      </p>
      <MovieList movies={movies} loading={loading} error={error} />
    </section>
  );
};
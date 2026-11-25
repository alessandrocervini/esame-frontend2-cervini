import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getMovieById } from "../../api/tmdb"
import type { MovieDetail as MovieDetailType } from "../../types/movieTypes"
import { MovieDetail } from "../MovieDetail"

export const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetailType | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadMovie = async () => {
      try {
        const data = await getMovieById(id)
        setMovie(data)
      } catch {
        setError("Errore nel caricamento del film.")
      } finally {
        setLoading(false);
      }
    }

    loadMovie()
  }, [id])

  if (loading) return <p className="warning">Caricamento dettaglio in corso...</p>
  if (error) return <p className="warning">Errore: {error}</p>
  if (!movie) return <p className="warning">Film non trovato.</p>

  return <MovieDetail movie={movie} />
};

export default DetailPage;
import { Link } from "react-router";
import type { MovieDetail } from "../types/movieTypes";
import { formatReleaseDate, TMDB_IMAGE_URL } from "../api/tmdb";

type Props = {
  movie: MovieDetail;
};

export const MovieCard = ({ movie }: Props) => {
  return (
    <article className="card">
      <div className="card__poster">
        {movie.poster_path ? (
          <img src={`${TMDB_IMAGE_URL}${movie.poster_path}`} />
        ) : (
          "Poster non disponibile"
        )}
      </div>
      <div className="card__body">
        <h2 className="card__title">{movie.title}</h2>
        <p className="card__meta"> Uscita: {formatReleaseDate(movie.release_date)} · Voto:{" "}
          {movie.vote_average.toFixed(1)}
        </p>
        <p className="card__overview">
          {movie.overview || "Trama non disponibile."}
        </p>
        <Link className="card__cta" to={`/movies/${movie.id}`}>
          Dettaglio
        </Link>
      </div>
    </article>
  );
};
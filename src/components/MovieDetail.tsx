import { Link } from "react-router"
import { formatReleaseDate, TMDB_IMAGE_URL } from "../api/tmdb"
import type { MovieDetail as MovieDetailType } from "../types/movieTypes"

type Props = {
  movie: MovieDetailType
};

export const MovieDetail = ({ movie }: Props) => {
  const language =
    movie.spoken_languages[0]?.english_name || movie.spoken_languages[0]?.name || 
    movie.original_language

        return (
    <div>
      <Link className="back-link" to="/">
        ← Torna all’elenco
      </Link>

      <article className="detail">
        <div>
          <div className="detail__poster">
            {movie.poster_path ? (
              <img src={`${TMDB_IMAGE_URL}${movie.poster_path}`} />
            ) : (
              "Poster non disponibile"
            )}
          </div>
        </div>

        <div>
          <h1 className="detail__title">{movie.title}</h1>

          {movie.tagline && (
            <p className="detail__tagline">“{movie.tagline}”</p>
          )}

          <ul className="detail__meta">
            <li>Uscita: {formatReleaseDate(movie.release_date)}</li>
            <li>Durata: {movie.runtime} min</li>
            <li>Voto: {movie.vote_average.toFixed(1)}</li>
            <li>Voti: {movie.vote_count}</li>
            <li>Stato: {movie.status}</li>
            <li>Lingua: {language}</li>
          </ul>

          {movie.genres.length > 0 && ( <div className="detail__genres">
              {movie.genres.map((genere) => (
                <span className="genre" key={genere.id}>
                  {genere.name}
                </span>
              ))}
            </div>
          )}

          <p className="detail__overview-label">Trama</p>
          <p className="detail__overview">
            {movie.overview || "Trama non disponibile."}
          </p>

          {movie.production_companies.length > 0 && (
            <p className="card__meta">
              Produzione:{" "}
              {movie.production_companies.map((c) => c.name).join(" · ")}
            </p>
          )}
        </div>
      </article>

      <p className="note">Wireframe statico.</p>
    </div>
  );

}
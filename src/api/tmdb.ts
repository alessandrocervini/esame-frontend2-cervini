const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const TMDB_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export const formatReleaseDate = (dateString: string): string => {
  if (!dateString) return "N/D";
  const parts = dateString.split("-");
  if (parts.length !== 3) return dateString;
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
};

export const getMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=The%20Lord%20of%20the%20Rings&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`
  );
  if (!response.ok) throw new Error("Errore nel caricamento dei film");
  const data = await response.json();
  return data.results.slice(0, 20);
};

export const getMovieById = async (id: string | undefined) => {
  if (id === undefined) throw new Error("ID mancante");
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );
  if (!response.ok) throw new Error("Errore nel caricamento del film");
  const data = await response.json();
  return data;
};
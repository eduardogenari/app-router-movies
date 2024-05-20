import { get } from "http";

export type Genre = {
  id: number;
  name: string;
};

const tmdbFetch = async (path: string) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    },
  };

  const response = await fetch(`https://api.themoviedb.org/3${path}`, options);
  return await response.json();
};

export const getMoviesGenres = async () => {
  const { genres } = await tmdbFetch("/genre/movie/list");
  return genres as Genre[];
};

export type Movie = {
  id: number;
  title: string;
  release_date: Date;
};

export const getMoviesWithGenres = async (genreIds: number[]) => {
  const genres = genreIds.map(String).join(",");
  const { results } = await tmdbFetch(
    `/discover/movie?with_genres=${genres}`
  );
  const movies = results.map((result: any) => ({
    ...result,
    release_date: new Date(result.release_date),
  }))
  return movies as Movie[];
};

export const getAllMovies = async () => {
  return getMoviesWithGenres([]);
}
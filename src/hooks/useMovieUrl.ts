import { useEffect, useState } from "react";

export interface MoviesProps {
  id?: number;
  title: string;
  poster_path: string;
  vote_average: number;
  tagline?: string;
  budget?: string;
  revenue?: number;
  runtime?: number;
  overview?: string;
  
}

const moviesURL: string = import.meta.env.VITE_API;
const apiKey: string = import.meta.env.VITE_API_KEY;

export const useMovieUrl = (id?: string) => {
  const [movies, setMovies] = useState<MoviesProps[]>([]);
  const [movieDetails, setMovieDetails] = useState<MoviesProps>();

  const getMovies = async (url: string) => {
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    });
    const data = await res.json();

    if (id) {
      setMovieDetails(data);
    } else {
      setMovies(data.results);
    }
  };

  useEffect(() => {
    const topUrl: string = id
      ? `${moviesURL}${id}`
      : `${moviesURL}top_rated?${apiKey}`;

    getMovies(topUrl);
  }, []);

  return {movies, movieDetails};
};

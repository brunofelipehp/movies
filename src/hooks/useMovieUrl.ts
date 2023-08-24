import { useEffect, useState } from "react";

export interface MoviesProps {
  id?: number;
  title: string;
  poster_path: string;
  vote_average: number;

}

interface  DetailsProps {
  tagline: string;
  budget: string;
  revenue: number;
  runtime: number;
  overview: string;
}

type MoviesDetailsProps = MoviesProps & DetailsProps;

const moviesURL: string = import.meta.env.VITE_API;
const apiKey: string = import.meta.env.VITE_API_KEY;

export const useMovieUrl = (id?: string) => {
  const [movies, setMovies] = useState<MoviesProps[]>([]);
  const [movieDetails, setMovieDetails] = useState<MoviesDetailsProps>();

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

  const formatCurrencyMovie = (number: number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };


  useEffect(() => {
    const topUrl: string = id
      ? `${moviesURL}${id}`
      : `${moviesURL}top_rated?${apiKey}`;

    getMovies(topUrl);
  }, []);

  return {movies, movieDetails, formatCurrencyMovie};
};

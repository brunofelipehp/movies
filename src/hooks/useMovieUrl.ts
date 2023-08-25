import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export interface MoviesProps {
  id?: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

interface DetailsProps {
  tagline: string;
  budget: string;
  revenue: number;
  runtime: number;
  overview: string;
}

type MoviesDetailsProps = MoviesProps & DetailsProps;

const moviesURL: string = import.meta.env.VITE_API;
const searchUrl: string = import.meta.env.VITE_SEARCH;
const apiKey: string = import.meta.env.VITE_API_KEY;

export const useMovieUrl = (id?: string) => {
  const [movies, setMovies] = useState<MoviesProps[]>([]);
  const [movieDetails, setMovieDetails] = useState<MoviesDetailsProps>();

  const [searchParams] = useSearchParams();

  const query = searchParams.get("q");

  const fetchMoviesUrl = async (url: string) => {
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
    if (query) {
      const searchWithQueryUrl = `${searchUrl}?query=${query}`;
      fetchMoviesUrl(searchWithQueryUrl);
    } else {
      const topUrl: string = id
        ? `${moviesURL}${id}`
        : `${moviesURL}top_rated?${apiKey}`;
      fetchMoviesUrl(topUrl);
    }
  }, [query]);

  return { movies, movieDetails, formatCurrencyMovie, query };
};

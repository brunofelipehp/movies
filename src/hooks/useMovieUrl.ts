import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export interface MoviesProps {
  id?: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

interface DetailsProps {
  tagline: string;
  budget: number;
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

  const fetchMoviesUrl = useCallback(
    async (url: string) => {
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
    },
    [id]
  );

  const formatCurrencyMovie = (number: number) => {
    return number.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  useEffect(() => {
    if (query) {
      const searchWithQueryUrl = `${searchUrl}?query=${query}`;
      fetchMoviesUrl(searchWithQueryUrl);
    } else {
      const topUrl: string = id
        ? `${moviesURL}${id}?language=pt-BR`
        : `${moviesURL}top_rated?${apiKey}&language=pt-BR`;
      fetchMoviesUrl(topUrl);
    }
  }, [query, fetchMoviesUrl, id]);

  return { movies, movieDetails, formatCurrencyMovie, query };
};

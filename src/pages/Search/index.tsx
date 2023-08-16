import { useSearchParams } from "react-router-dom";
import { Container, MoviesContainer, Title } from "./styles";
import { useEffect, useState } from "react";

import { MoviesProps } from "../Home";
import { MovieCard } from "../../components/MovieCard";

interface MovieProps extends MoviesProps {}

const searchUrl: string = import.meta.env.VITE_SEARCH
const apiKey: string = import.meta.env.VITE_API_KEY;


export  function Search () {
  const [searchParams] = useSearchParams()

  const [movies, setMovies] = useState<MovieProps[]>([])
  const query = searchParams.get("q")

  const getSearchMovies = async (url: string) => {
    const res = await fetch(url, {
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "accept": "application/json",
        'Access-Control-Allow-Origin': ' *',
        
      },
    });
    const data = await res.json();

    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryUrl = `${searchUrl}?query=${query}`;

    getSearchMovies(searchWithQueryUrl);
  }, [query]);

    return (
<Container>
      <Title>
        Resultados para <span>{query}</span>
      </Title>
      <MoviesContainer>
        {movies.length === 0 && <p>Carregando...</p>}
        {movies.length > 0 &&
          movies.map((movie) => (
            <MovieCard 
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              vote_average={movie.vote_average}
            />
          ))}
      </MoviesContainer>
    </Container>
    );
  }
  
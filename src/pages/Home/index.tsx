import { useEffect, useState } from "react";

import { MovieCard } from "../../components/MovieCard/index";

import { Container, MoviesContainer, Title } from "./styles";

const moviesURL: string = import.meta.env.VITE_API;
const apiKey: string = import.meta.env.VITE_API_KEY;

export interface MoviesProps {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
}


export function Home() {
  const [topMovies, setTopMovies] = useState<MoviesProps[]>([]);

  const getTopRatedMovies = async (url: string) => {
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
    });
    const data = await res.json();

    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;

    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <Container>
      <Title>Melhores</Title>
      <MoviesContainer>
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 &&
          topMovies.map((movie) => (
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

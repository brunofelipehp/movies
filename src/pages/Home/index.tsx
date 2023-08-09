import { useEffect, useState } from "react";
import { Container, MoviesContainer, Title } from "./styles";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

interface MoviesProps {
  id: number;
  title: string;
}

export function Home() {
  const [topMovies, setTopMovies] = useState<MoviesProps[]>([]);

  const getTopRatedMovies = async (url: string) => {
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${apiKey}`,
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
        {topMovies &&
          topMovies.map((movie) => <p key={movie.id}>{movie.title}</p>)}
      </MoviesContainer>
    </Container>
  );
}

import { MovieCard } from "../../components/MovieCard/index";

import { Container, MoviesContainer, Title } from "./styles";
import { useMovieUrl } from "../../hooks/useMovieUrl";


export function Home() {
  const {movies} = useMovieUrl()

  return (
    <Container>
      <Title>Melhores</Title>
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

import { MovieCard } from "../../components/MovieCard";
import { useMovieUrl } from "../../hooks/useMovieUrl";

import { Container, MoviesContainer, Title } from "./styles";

export function Search() {
  const { movies, query } = useMovieUrl();

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

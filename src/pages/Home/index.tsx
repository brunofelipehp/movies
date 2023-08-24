import { MovieCard } from "../../components/MovieCard";
import { SearchMovies } from "../../components/SearchMovies";

import { useMovieUrl } from "../../hooks/useMovieUrl";

import { Container, MoviesContainer, Title } from "./styles";
import { Loading } from "../../styles/global";

export function Home() {
  const { movies } = useMovieUrl();

  return (
    <Container>
      <SearchMovies />
      <Title>Melhores</Title>
      <MoviesContainer>
        {movies.length === 0 && <Loading>Carregando...</Loading>}
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

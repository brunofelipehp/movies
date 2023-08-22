import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";
import { CardInfo, Description, Info, MoviePage, TagLine } from "./styles";
import { FaStar } from "react-icons/fa";
import { useMovieUrl } from "../../hooks/useMovieUrl";


const imageUrl: string = import.meta.env.VITE_IMG;

export function Movie() {
  const { id } = useParams();

  const { movieDetails } = useMovieUrl(id);

  const formatCurrency = (number: number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <MoviePage>
      {movieDetails && (
        <>
          <CardInfo>
            <img
              src={`${imageUrl}${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
            <h2>{movieDetails.title}</h2>
            <p>
              <FaStar /> {movieDetails.vote_average}
            </p>
          </CardInfo>

          <TagLine>{movieDetails.tagline}</TagLine>
          <Info>
            <h3>
              <BsWallet2 /> Orçamento
            </h3>
            <p>{movieDetails.budget}</p>
          </Info>

          <Info>
            <h3>
              <BsGraphUp /> Receita
            </h3>
            <p>
              {movieDetails.revenue
                ? formatCurrency(movieDetails.revenue)
                : "?"}
            </p>
          </Info>

          <Info>
            <h3>
              <BsHourglassSplit /> Duração
            </h3>
            <p>{movieDetails.runtime} minutos</p>
          </Info>

          <Description>
            <h3>
              <BsFillFileEarmarkTextFill /> Descrição
            </h3>
            <p>{movieDetails.overview}</p>
          </Description>
        </>
      )}
    </MoviePage>
  );
}

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";
import { MoviesProps } from "../Home";
import { CardInfo, Description, Info, MoviePage, TagLine } from "./styles";
import { FaStar } from "react-icons/fa";

interface MovieProps extends MoviesProps {
  tagline: string;
  budget: string;
  revenue: number;
  runtime: number;
  overview: string;
}

const moviesURL: string = import.meta.env.VITE_API;
const apiKey: string = import.meta.env.VITE_API_KEY;
const imageUrl: string = import.meta.env.VITE_IMG;


export function Movie() {
  const { id } = useParams();

  const [movie, setMovie] = useState<MovieProps | null>(null);

  const getMovie = async (url: string) => {
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    });

    const data = await res.json();

    setMovie(data);
  };

  const formatCurrency = (number: number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}`;

    getMovie(movieUrl);
  }, []);

  return (
    <MoviePage>
      {movie && (
        <>
          <CardInfo>
            <img src={`${imageUrl}${movie.poster_path}`} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>
              <FaStar /> {movie.vote_average}
            </p>
          </CardInfo>

          <TagLine>{movie.tagline}</TagLine>
          <Info>
            <h3>
              <BsWallet2 /> Orçamento
            </h3>
            <p>{movie.budget}</p>
          </Info>

          <Info>
            <h3>
              <BsGraphUp /> Receita
            </h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </Info>

          <Info>
            <h3>
              <BsHourglassSplit /> Duração
            </h3>
            <p>{movie.runtime} minutos</p>
          </Info>

          <Description>
            <h3>
              <BsFillFileEarmarkTextFill /> Descrição
            </h3>
            <p>{movie.overview}</p>
          </Description>
        </>
      )}
    </MoviePage>
  );
}

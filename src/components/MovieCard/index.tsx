import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";
import { MoviesProps } from "../../pages/Home";
import { Card } from "./styles";

export interface MovieCardProps extends MoviesProps {
  showLink?: boolean;
}

const imageUrl: string = import.meta.env.VITE_IMG;

export const MovieCard = ({
  id,
  title,
  poster_path,
  vote_average,
  showLink = true,
}: MovieCardProps) => {
  return (
    <Card>
      <img src={`${imageUrl}${poster_path}`} alt={title} />
      <h2>{title}</h2>
      <p>
        <FaStar /> {vote_average}
      </p>
      {showLink && <Link to={`/movie/${id}`}>Detalhes</Link>}
    </Card>
  );
};

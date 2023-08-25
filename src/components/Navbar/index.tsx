import { Link} from "react-router-dom";
import { PiPopcorn } from "react-icons/pi";

import { Menu } from "./styles";


export const Navbar = () => {
  
  return (
    <Menu>
      <h2>
        <Link to="/">
          <PiPopcorn /> MoviesLib
        </Link>
      </h2>
    </Menu>
  );
};

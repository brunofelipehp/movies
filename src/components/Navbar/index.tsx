import { Link} from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";

import { Menu } from "./styles";


export const Navbar = () => {
  
  return (
    <Menu>
      <h2>
        <Link to="/">
          <BiCameraMovie /> MoviesLib
        </Link>
      </h2>
    </Menu>
  );
};

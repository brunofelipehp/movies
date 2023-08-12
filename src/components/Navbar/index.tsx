import { Link } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi"

import { Menu } from './styles'

export const Navbar = () => {
  return (
         <Menu>
        <h2>
          <Link to="/"><BiCameraMovie /> MoviesLib</Link>
        </h2>
        <form >
            <input type="text" placeholder="Busque um filme" />
            <button type="submit" title="search">
                <BiSearchAlt2 />
            </button>
            </form>
      </Menu>
  )
}


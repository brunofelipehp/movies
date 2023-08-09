import { Link } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi"

export const Navbar = () => {
  return (
         <nav id='navbar'>
        <h2>
          <Link to="/"><BiCameraMovie /> MoviesLib</Link>
        </h2>
        <form >
            <input type="text" placeholder="Busque um filme" />
            <button type="submit" title="search">
                <BiSearchAlt2 />
            </button>
            </form>
      </nav>
  )
}

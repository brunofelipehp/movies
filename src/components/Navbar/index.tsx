import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import { Menu } from "./styles";
import { ChangeEvent, useState } from "react";

export const Navbar = () => {
  const [search, setSearch] = useState<string>("");

  const navigate = useNavigate()

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!search) return

    navigate(`/search?q=${search}`)

    setSearch("")
    
  }
  
  return (
    <Menu>
      <h2>
        <Link to="/">
          <BiCameraMovie /> MoviesLib
        </Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busque um filme"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit" title="search">
          <BiSearchAlt2 />
        </button>
      </form>
    </Menu>
  );
};

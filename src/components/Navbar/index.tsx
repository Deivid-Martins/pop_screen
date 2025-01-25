import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

import './styles.css'
import { FormEvent, useState } from "react";

export function Navbar() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!search) return;

    navigate(`/search?q=${search}`)
    setSearch('')
  }


  return (
    <nav id="navbar">
      <h2>
        <Link to='/'><BiCameraMovie /> <span>PopScreen</span></Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Search a Movie" 
          onChange={e => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit" disabled={search.length === 0}>
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
}
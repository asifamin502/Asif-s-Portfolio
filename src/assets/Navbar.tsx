/* eslint-disable */
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import "./nav.css";
import { ThemeContext } from "./Context";

const Navbar = () => {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <div>
      <nav className="navbar">
        <NavLink className="navlink" to="/">
          Home
        </NavLink>
        <NavLink className="navlink" to="/aboutme">
          About Me
        </NavLink>
        <NavLink className="navlink" to="/projects">
          Projects
        </NavLink>
        <a
          href="/ASIF-AL-AMIN_Frontend_Developer_CV.pdf"
          download
          className="navlink"
        >
          Download CV
        </a>
        <button className="themebutton" onClick={toggle}>
          {theme ? <MdOutlineDarkMode /> : <CiLight />}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;

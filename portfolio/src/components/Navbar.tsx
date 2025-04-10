import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import ColorSwitch from "./ColorSwitch";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className={ isOpen? "active-link-logo" : "logo"}>Portfolio</div>
      <div className={`nav-links ${isOpen ? "active" : ""}`}>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
      <li><ColorSwitch></ColorSwitch> </li>
       <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link to="/project" onClick={() => setIsOpen(false)}>Projects</Link></li>
        <li><Link to="/resume" onClick={() => setIsOpen(false)}>Resume</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        
     </ul>
      </div>

      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
    </nav>
  );
};

export default Navbar;

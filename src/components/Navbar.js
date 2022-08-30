
import React, { useState } from "react"
import { Link } from "react-router-dom";
import "./navbar.css";
import {FaBars} from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
const Navbar = () =>{

const [Mobile, setMobile] = useState(false)
    
    return(
        <nav className="navbar">
            <div className="nav-container">
            <h3 className="logo">Pete Branham Portfolio</h3>

            <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
                <Link to='/'><li>Home</li></Link>
                <Link to='about'><li>About Me</li></Link>
                <Link to='projects'><li>My Projects</li></Link>
            </ul>
            <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>

            </div>
        </nav>
    )
}

export default Navbar;
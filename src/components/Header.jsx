import React from "react";
import EmailIcon from '@mui/icons-material/Email';
// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
    return (
       <>
       <nav className="navbar navbar-expand-lg bg-transparent py-4 nav-header">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
         <span className="me-email"><EmailIcon /></span>archanasingh2541@gmail.com
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navMenu">
          <ul className="navbar-nav gap-4 nav-item-main">
            <li className="nav-item"><HashLink  className="nav-link" smooth  to="#about">About</HashLink></li>
            <li className="nav-item"><HashLink className="nav-link" smooth  to="#experience">Experience</HashLink></li>
            <li className="nav-item"><HashLink className="nav-link" smooth  to="#education">Education</HashLink></li>
            <li className="nav-item"><HashLink className="nav-link" smooth  to="#work">My Work</HashLink></li>
               <li className="nav-item"><HashLink className="nav-link" smooth  to="#contact">Contact</HashLink></li>
          </ul>
        </div>
      </div>
    </nav>
       </>
    );
}

export default Header;
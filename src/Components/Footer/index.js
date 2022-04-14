import React from "react";
import { Link } from "react-router-dom";
import './style.css'

const Footer = () =>{
    return(
        <div className="footer-background">
        <footer className="py-3">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">

            <Link to="/about">
            <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">About</a></li>
            </Link>

            <Link to="/portfolio">
            <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Portfolio</a></li>
            </Link>

            <Link to="/knowledge">
            <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Knowledge</a></li>
            </Link>

            <Link to="/contact">
            <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Contact</a></li>
            </Link>

          </ul>
          <p className="text-center text-muted">&copy; 2022 Company, Inc</p>
        </footer>
      </div> 
    );
}

export default Footer;
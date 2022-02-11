import React from 'react';
import { Link } from "react-router-dom";


function Navbar() {
    return <div>
      <nav id="navBar" class="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
        <div className="container-fluid">
            <Link to="/" class="navbar-brand">
                <img src="/myImages/rytlogo2.png" alt="logo" width="120" height="40"/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <Link to="/" class="nav-link active" aria-current="page">HOME</Link>
                    </li>                    
                    <li class="nav-item">
                        <Link to="/About" class="nav-link active">ABOUT US</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/Academy" class="nav-link active">ACADEMY</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/Blog" class="nav-link active">BLOG</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/Events" class="nav-link active">EVENTS</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/Contact" class="nav-link active">CONTACT</Link>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
    </div>;
  }

export default Navbar;

import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="full-nav-area">
         <nav class="navbar navbar-expand-lg navbar-dark bg-dark  container">
            <div class="container-fluid nav-full-area">
                <a class="navbar-brand" href="#">ANIK</a>
                <button  class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span  class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse navigation-area" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                         <li class="nav-item">
                            <Link className="nav-link ms-3" to="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link ms-3" to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link ms-3" to="/blog">Blog</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link ms-3" to="/projects">Projects</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link ms-3" to="/resume">Resume</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link ms-3" to="/contact">Contact</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link ms-3" to="/skill">Skill</Link>
                        </li>
                    </ul>
                
                </div>
            </div>
      </nav>
      </div>
    );
};

export default Navigation;
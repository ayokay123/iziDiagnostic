import React from 'react';
import {Link} from "react-router-dom";

export const Navbar = () => {
    return (
        <header>
            <div className="fixed-top navbar-custom"></div>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top ">
                <div className="container">
                    <p className="navbar-brand unclickable"><b className="text-warning">izi</b> Diagnostic</p>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav ml-auto navbar-s-bg">
                            <li>
                                <Link to="/" className="nav-item nav-link navbar-s-bg-text">Home <span
                                    className="sr-only">(current)</span></Link>
                            </li>
                            <li>
                                <Link to="/diagnostic" className="nav-item nav-link navbar-s-bg-text">Diagnostic</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};
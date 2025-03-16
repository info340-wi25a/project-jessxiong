import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-light">
                <div className="container">
                <Link className="navbar-brand" to="/">
                    <img className="logo" src="/img/6585301_books_education_learning_school_study_icon.png" alt="Home"/>
                    FocusFlow
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                    aria-label="Toggle nav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/timer">Timer</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/subject">Notes</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/help">Help</Link>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="/img/6585301_books_education_learning_school_study_icon.png"
              width="20"
              height="20"
              alt="Home"
            />
            FocusFlow
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/timer">Timer</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/subject">Notes</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
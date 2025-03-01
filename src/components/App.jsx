import React from 'react';
import { useState } from 'react';
// import  { BrowserRouter } from 'react';
import { Routes, Route, Link } from 'react-router';
import Navbar from './NavBar.jsx';
import Home from './Home.jsx';

import { SubjectNotesPage } from "./SubjectNotesPage.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/timer" element={<Timer />} />
        <Route path="/notes" element={<Notes />} /> */}
        <Route path="/subject" element={ <SubjectNotesPage /> } />
      </Routes>
      <footer className="credits">
        <p>Favicon from Icon Finder ©</p>
      </footer>
    </div>
  );
}

export default App;

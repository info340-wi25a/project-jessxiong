import React from 'react';
import { useState } from 'react';
// import  { BrowserRouter } from 'react';
import { Routes, Route, Link } from 'react-router';
import Navbar from './NavBar.jsx';
import Home from './Home.jsx';

import { SubjectCardList } from "./SubjectCardList.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/timer" element={<Timer />} />
        <Route path="/notes" element={<Notes />} /> */}
        <Route path="/" element={ <SubjectCardList /> } />
      </Routes>
      <footer className="credits">
        <p>Favicon from Icon Finder ©</p>
      </footer>
    </div>
  );
}

export default App;

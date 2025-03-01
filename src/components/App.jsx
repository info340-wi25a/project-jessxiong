import React from 'react';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router';
import Navbar from './NavBar.jsx';
import Home from './Home.jsx';

import { SubjectNotesPage } from "./SubjectNotesPage.jsx";
import { IndividualNotesPage } from './IndividualNotesPage.jsx';

function App() {

  const subjectNames = ["INFO340", "INFO360", "INFO380", "CSE373", "CSE414"];
  const noteNames = ["Lecture1", "Assignment1", "Exam 1", "Exam2", "Final Project"];

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/timer" element={<Timer />} />
        <Route path="/notes" element={<Notes />} /> */}
        <Route path="/subject" element={ <SubjectNotesPage titleNames={subjectNames} /> } />
       <Route path="/individual" element={ <IndividualNotesPage titleNames={noteNames} /> } />
      </Routes>
      <footer className="credits">
        <p>Favicon from Icon Finder ©</p>
      </footer>
    </div>
  );
}

export default App;

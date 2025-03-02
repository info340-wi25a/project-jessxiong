import React from 'react';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router';
import Navbar from './NavBar.jsx';
import Home from './Home.jsx';

import { SubjectNotesPage } from "./SubjectNotesPage.jsx";
import { IndividualNotesPage } from './IndividualNotesPage.jsx';
import { EditNote } from "./EditNote.jsx";
import { Help } from "./Help.jsx";

function App() {
  const initialSubjectList = ["INFO340", "INFO360", "INFO380", "CSE373", "CSE414"];
  const [subjectNames, setSubjectNames] = useState(initialSubjectList);
  const [newSubject, setNewSubject] = useState("");
  const noteNames = ["Lecture1", "Assignment1", "Exam 1", "Exam2", "Final Project"];

  const handleAddSubjectClick = (event) => {
    event.preventDefault();
    setSubjectNames( (originalList) => [...originalList, newSubject]);
    setNewSubject('');
  }

  const handleInputAddCard = (event) => {
    setNewSubject(event.target.value);
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/timer" element={<Timer />} />
        <Route path="/notes" element={<Notes />} /> */}
        <Route path="/subject" element={ <SubjectNotesPage 
          titleNames={subjectNames} 
          newSubject={newSubject}
          handleAddSubjectClick={handleAddSubjectClick}
          handleInputAddCard={handleInputAddCard}
          />} >


            <Route path=":cardtitle" element={<IndividualNotesPage titleNames={noteNames}/>} />
        </Route>
       <Route path="/individual" element={ <IndividualNotesPage titleNames={noteNames} /> } />
       <Route path="/edit" element={ <EditNote /> } />
       <Route path="/help" element={ <Help /> } />
      </Routes>
      <footer className="credits">
        <p>Favicon from Icon Finder ©</p>
      </footer>
    </div>
  );
}

export default App;

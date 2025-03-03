import React from 'react';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router';
import Navbar from './NavBar.jsx';
import Home from './Home.jsx';
import { Timer } from "./Timer.jsx";


import { SubjectNotesPage } from "./SubjectNotesPage.jsx";
import { IndividualNotesPage } from './IndividualNotesPage.jsx';
import { EditNote } from "./EditNote.jsx";
import { Help } from "./Help.jsx";

function App() {
  const initialSubjectList = ["INFO340", "INFO360", "INFO380", "CSE373", "CSE414"];
  const initialNoteNames = ["Lecture1", "Assignment1", "Exam 1", "Exam2", "Final Project"];
  const [subjectNames, setSubjectNames] = useState(initialSubjectList);
  const [newSubject, setNewSubject] = useState("");
  const [noteNames, setNoteNames] = useState(initialNoteNames);
  const [newNote, setNewNote] = useState('');

  console.log(noteNames);

  const handleAddSubjectClick = (event) => {
    event.preventDefault();
    setSubjectNames( (originalList) => [...originalList, newSubject]);
    setNewSubject('');
  }

  const handleAddNoteClick = (event) => {
    event.preventDefault();
    setNoteNames( (originalList) => [...originalList, newNote]);
    setNewNote('');
  }

  const handleInputAddCard = (event) => {
    setNewSubject(event.target.value);
  }

  const handleInputAddNoteCard = (event) => {
    setNewNote(event.target.value);
  }

  const handleDeleteSubject = (subjectToDelete) => {
    setSubjectNames((originalList) => 
      originalList.filter((subject) => subject !== subjectToDelete))
  }

  const handleDeleteNote = (noteToDelete) => {
    setNoteNames((originalList) => 
      originalList.filter((note) => note !== noteToDelete))
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timer" element={<Timer />} /> 
        <Route path="/subject" element={ <SubjectNotesPage 
          titleNames={subjectNames} 
          newSubject={newSubject}
          handleAddSubjectClick={handleAddSubjectClick}
          handleInputAddCard={handleInputAddCard}
          handleDelete={handleDeleteSubject}
          />} />
       <Route path="/subject/:cardtitle" element={ <IndividualNotesPage 
          titleNames={noteNames} 
          newNote={newNote}
          handleAddNoteClick={handleAddNoteClick}
          handleInputAddNoteCard={handleInputAddNoteCard}
          handleDeleteNote={handleDeleteNote}
       /> } />
       <Route path="/subject/:cardtitle/edit" element={ <EditNote /> } />
       <Route path="/help" element={ <Help /> } />
      </Routes>
      <footer className="credits">
        <p>© Favicon from Icon Finder</p>
      </footer>
    </div>
  );
}

export default App;

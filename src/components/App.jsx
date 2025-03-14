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
  const [subjectNames, setSubjectNames] = useState([]);
  const [newSubject, setNewSubject] = useState("");
  const [noteBySubject, setNoteBySubject] = useState({});
  const [newNote, setNewNote] = useState('');
  //const [currSubject, setCurrSubject] = useState("");

  console.log(noteBySubject);
  //console.log(currSubject);

  function ChangeCurrentSubject(subject) {
    setCurrSubject(subject);
  }

  function handleAddSubjectClick(event) {
    event.preventDefault();

    const newSubjectNames = [...subjectNames, newSubject];
    setSubjectNames(newSubjectNames);

    const newNotes = {...noteBySubject, [newSubject] : []};
    setNoteBySubject(newNotes);

    setNewSubject('');
  }

  function handleAddNoteClick(event, currSubject) {
    event.preventDefault();

    const updatedNotes =  [...(noteBySubject[currSubject] || []), newNote];

    const newNoteBySubject = {...noteBySubject, [currSubject] : updatedNotes};
    setNoteBySubject(newNoteBySubject);

    setNewNote('');
  }

  function handleInputAddCard(event) {
    setNewSubject(event.target.value);
  }

  function handleInputAddNoteCard(event) {
    setNewNote(event.target.value);
  }

  function handleDeleteSubject(subjectToDelete) {
    const newSubjectNames = subjectNames.filter((subject) => {
      return subject !== subjectToDelete
    })
    setSubjectNames(newSubjectNames);

    const { [subjectToDelete]: deletedSubject, ...remainingSubjects } = noteBySubject;
    setNoteBySubject(remainingSubjects);
  }

  function handleDeleteNote(subject, noteToDelete) {
    const updatedNotes = noteBySubject[subject].filter(note => note !== noteToDelete);

    const newNoteBySubject = { ...noteBySubject, [subject]: updatedNotes };
    setNoteBySubject(newNoteBySubject);
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
          //ChangeCurrSubject={ChangeCurrentSubject}
          />} />
       <Route path="/subject/:cardtitle" element={ <IndividualNotesPage 
          noteBySubject={noteBySubject} 
          newNote={newNote}
          handleAddNoteClick={handleAddNoteClick}
          handleInputAddNoteCard={handleInputAddNoteCard}
          handleDeleteNote={handleDeleteNote}
          //currSubject={currSubject}
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

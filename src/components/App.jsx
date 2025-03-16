import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router';
import { getDatabase, ref, set as firebaseSet, push as firebasePush, onValue, update } from 'firebase/database';
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

  console.log(noteBySubject);

  useEffect(() => {
    const db = getDatabase();
    const subjectListRef = ref(db, "subjects");


    onValue(subjectListRef, (snapshot) => {
      console.log("database changed");
      const dataObj = snapshot.val();

      if (dataObj) {
        const objKeys = Object.keys(dataObj);
        const dataArray = objKeys.map((keyString) => {
          const transformed = {subject: keyString, notes: dataObj[keyString].notes || []};
        return transformed;
      })

      console.log(dataArray);

      console.log(dataArray);
      setNoteBySubject(dataArray);
      }
    } )

  }, [])

  function handleAddSubjectClick(event) {
    event.preventDefault();

    const newSubjectNames = [...subjectNames, newSubject];

    const db = getDatabase();
    const subjectListRef = ref(db, "subjects");

    const newSubjectNotes = {
      notes: []
    }

    const newSubjectData = {
      newSubject : newSubjectNotes
    }

    // const newNotes = {...noteBySubject, [newSubject] : []};
    // setNoteBySubject(newNotes);

    
    firebasePush(subjectListRef, newSubjectData);

    setSubjectNames(newSubjectNames);
    setNewSubject('');
  }

  function handleAddNoteClick(event, currSubject) {
    event.preventDefault();

    const updatedNotes =  [...(noteBySubject[currSubject] || []), newNote];

    const newNoteList = { notes : updatedNotes}

    const newNoteBySubject = {...noteBySubject, [currSubject]: newNoteList};
    setNoteBySubject(newNoteBySubject);

    setNewNote('');

    const db = getDatabase();
    const subjectListRef = ref(db, "subjects/" + currSubject + "/notes");

    firebasePush(subjectListRef, newNote);
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
       <Route path="/subject/:subjecttitle" element={ <IndividualNotesPage 
          noteBySubject={noteBySubject} 
          newNote={newNote}
          handleAddNoteClick={handleAddNoteClick}
          handleInputAddNoteCard={handleInputAddNoteCard}
          handleDeleteNote={handleDeleteNote}
        /> } />
        <Route path="/subject/:subjecttitle/:cardtitle/edit" element={<EditNote />} />
        <Route path="/help" element={ <Help /> } />
        <Route path="*" element={<Help /> } />
      </Routes>
      <footer className="credits">
        <p>© Favicon from Icon Finder</p>
      </footer>
    </div>
  );
}

export default App;
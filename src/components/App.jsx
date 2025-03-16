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
          const notes = dataObj[keyString].notes || {};
          const notesArray = Object.keys(notes).map((noteKey) => notes[noteKey]);
          return { subject: keyString, notes: notesArray }; 
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

    const newNoteObj = { title: newNote, content: "" };
    const updatedNotes = [...(noteBySubject[currSubject]?.notes || []), newNoteObj];

    const newNoteList = { notes : updatedNotes}

    const newNoteBySubject = {...noteBySubject, [currSubject]: newNoteList};
    setNoteBySubject(newNoteBySubject);

    setNewNote('');

    const db = getDatabase();
    const subjectNotesRef = ref(db, "subjects/" + currSubject + "/notes");

    firebasePush(subjectNotesRef, newNoteObj);
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

    const db = getDatabase();
    const subjectListRef = ref(db, "subjects/" + subjectToDelete);
    firebaseSet(subjectListRef, null);
  }

  function handleDeleteNote(subject, noteToDelete) {
    console.log(noteBySubject);
    const noteNames = Object.keys(noteBySubject);
    let copy = {...noteBySubject};
    let keyToUse = '';
  
    noteNames.forEach((key) => {
        if (copy[key].subject === subject) {
            const notes = copy[key].notes;
            keyToUse = key;

            const updatedNotes = Object.keys(notes)
            const filtered = updatedNotes.filter((noteKey) => {
              return notes[noteKey].title !== noteToDelete});
            const filteredObject = filtered.reduce((result, noteKey) => {
                    result[noteKey] = notes[noteKey];
                    return result;
                }, {});

            copy[key].notes = filteredObject;
        }
    });

    console.log(copy);

    setNoteBySubject(copy);

    const db = getDatabase();
    const noteListRef = ref(db, "subjects/" + subject);
    firebaseSet(noteListRef, { notes: copy[keyToUse].notes });
  }

function handleUpdateNote(subject, title, newContent) {
  console.log(noteBySubject);
  
  let copy = { ...noteBySubject };
  let keyToUse = '';

  Object.keys(copy).forEach((key) => {
      if (copy[key].subject === subject) {
          const notes = copy[key].notes;
          keyToUse = key;

          const updatedNotes = Object.keys(notes).reduce((result, noteKey) => {
              if (notes[noteKey].title === title) {
                  result[noteKey] = { ...notes[noteKey], content: newContent };
              } else {
                  result[noteKey] = notes[noteKey];
              }
              return result;
          }, {});

          copy[key].notes = updatedNotes;
      }
  });

  setNoteBySubject(copy);

  const db = getDatabase();
  const noteListRef = ref(db, "subjects/" + subject + "/notes");
  firebaseSet(noteListRef, copy[keyToUse].notes);
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
        <Route path="/subject/:subjecttitle/:cardtitle/edit" element={<EditNote
          noteBySubject={noteBySubject} handleUpdateNote={handleUpdateNote}
        />} />
        <Route path="/help" element={ <Help /> } />
        <Route path="*" element={<Help /> } />
      </Routes>
      <footer className="credits">
        <p>&copy; Favicon from Icon Finder</p>
      </footer>
    </div>
  );
}

export default App;
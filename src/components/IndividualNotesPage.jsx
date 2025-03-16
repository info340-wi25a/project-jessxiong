import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { useState } from 'react';

import { CardListNotes  } from "./CardList.jsx";
import { SearchByNote } from "./SearchByNote.jsx";

export function IndividualNotesPage(props) {
    const { subjecttitle } = useParams();

    const {noteBySubject, newNote, handleAddNoteClick, handleInputAddNoteCard, handleDeleteNote} = props;

    const [userKeyword, setUserKeyword] = useState('');
    console.log(userKeyword);

    console.log(noteBySubject);

    //const noteNames = noteBySubject[subjecttitle] || [];

    const noteNames = Object.keys(noteBySubject);
    let toDisplay = '';
    let arrayToDisplay = [];
    let dataArray = noteNames.filter((keyString) => {
        // const transformed = {
        //     subject: noteBySubject[keyString].subject,
        //     notes: noteBySubject[keyString].notes || [],
        // };
        console.log(noteBySubject[keyString].subject);
        console.log(subjecttitle);
        if (noteBySubject[keyString].subject === subjecttitle) {
            console.log(noteBySubject[keyString].notes)
            toDisplay = Object.keys(noteBySubject[keyString].notes)
            console.log(toDisplay);
            arrayToDisplay = toDisplay.map((key) => {
                return noteBySubject[keyString].notes[key]
            })
            //noteBySubject[keyString].notes[toDisplay];
            console.log(arrayToDisplay);
            return arrayToDisplay;
        }
      return false;
    })

    //dataArray = dataArray.notes;
    
    // const dataArray = noteNames.filter((key) => {
    //     console.log(key.subject);
    //     return key.subject === subjecttitle;
    // })

    // const noteNames = noteBySubject.filter((data) => {
    //     return data.subject === subjecttitle;
    // })

    // noteNames = noteBySubject[noteNames].notes;

    console.log(noteNames);
    console.log(dataArray);

    const displayedCards = arrayToDisplay.filter((note) => {
        if ( userKeyword === '') {
            return true;
        } else {
            if ( title.toLowerCase().includes(userKeyword.toLowerCase())) {
                return true;
            }
        }

        return false;
    })
    

    console.log(displayedCards);


    function handleInput(event) {
        setUserKeyword(event.target.value);
    }

    function applyFilter(typed) {
        setUserKeyword(typed);
    }

    const goTo = useNavigate();

    function handleBack(event) {
        goTo("/subject");
    }
    
    return (
        <div>
            <button className="btn button-style back-button" type="submit" onClick={handleBack}>Back</button>
            <h1>Notes for {subjecttitle} </h1>
            <SearchByNote 
            userKeyword={userKeyword}
            handleInput={handleInput}
            applyFilter={applyFilter}/>
            <CardListNotes 
            titleNames={displayedCards}
            newNote={newNote}
            handleAddNoteClick={handleAddNoteClick}
            handleInputAddNoteCard={handleInputAddNoteCard}
            handleDelete={handleDeleteNote}
            subjecttitle={subjecttitle}
            />
        </div>
    )
}
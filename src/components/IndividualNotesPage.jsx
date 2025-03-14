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

        const noteNames = noteBySubject[subjecttitle] || [];
        console.log(noteNames);

    const displayedCards = noteNames.filter((title) => {
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
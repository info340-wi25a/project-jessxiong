import React from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';

import { CardListNotes  } from "./CardList.jsx";
import { SearchByNote } from "./SearchByNote.jsx";

export function IndividualNotesPage(props) {
    const { cardtitle } = useParams();

    const {titleNames, newNote, handleAddNoteClick, handleInputAddNoteCard, handleDeleteNote} = props;

    const [userKeyword, setUserKeyword] = useState('');
    console.log(userKeyword);

    
        const displayedCards = titleNames.filter((title) => {
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

    
        const handleInput = (event) => {
            setUserKeyword(event.target.value);
        }
    
        const applyFilter = (typed) => {
            setUserKeyword(typed);
        }
    
    return (
        <div>
            <h1>Notes for {cardtitle} </h1>
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
            />
        </div>
    )
}
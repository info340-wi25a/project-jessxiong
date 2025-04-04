import React from 'react';
import { useState } from 'react';

import { CardListSubject  } from "./CardList.jsx";
import { SearchBySubject } from "./SearchBySubject.jsx";

export function SubjectNotesPage(props) {    
    const {titleNames, newSubject, handleAddSubjectClick, handleInputAddCard, handleDelete} = props;
    
    const [selected, setSelected] = useState('none');
    const [userKeyword, setUserKeyword] = useState('');
    console.log(selected, userKeyword);

    const displayedCards = props.titleNames.filter((title) => {
        if ((selected === 'none') && userKeyword === '') {
            return true;
        } else {
            if (selected === title && userKeyword === '') {
                return true;
            } else if ((selected === title || selected === 'none') && title.toLowerCase().includes(userKeyword.toLowerCase())) {
                return true;
            }
        }

        return false;
    })
    

    console.log(displayedCards);

    function handleSelect(event) {
        const subject = event.target.value;
        setSelected(subject);
    }

    function handleInput(event) {
        setUserKeyword(event.target.value);
    }

    function applyFilter(typed, title) {
        setSelected(title);
        setUserKeyword(typed);
    }



    return (
        <div>
            <h1>Subjects</h1>
            <SearchBySubject 
            titleNames={props.titleNames} 
            selected={selected} 
            userKeyword={userKeyword}
            handleSelect={handleSelect}
            handleInput={handleInput}
            applyFilter={applyFilter}
            />
            <CardListSubject 
            titleNames={displayedCards} 
            newSubject={newSubject}
            handleAddSubjectClick={handleAddSubjectClick}
            handleInputAddCard={handleInputAddCard}
            handleDelete={handleDelete}
            />
        </div>
    )
}
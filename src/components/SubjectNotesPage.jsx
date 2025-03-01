import React from 'react';


import { CardList  } from "./CardList.jsx";
import { SearchBySubject } from "./SearchBySubject.jsx";

export function SubjectNotesPage(props) {    
    
    return (
        <div>
            <h1>Subjects</h1>
            <SearchBySubject titleNames={props.titleNames}/>
            <CardList titleNames={props.titleNames} />
        </div>
    )
}
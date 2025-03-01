import React from 'react';

import { CardList  } from "./CardList.jsx";
import { SearchByDate } from "./SearchByDate.jsx";

export function IndividualNotesPage(props) {
    return (
        <div>
            <h1>Notes</h1>
            <SearchByDate />
            <CardList titleNames={props.titleNames}/>
        </div>
    )
}
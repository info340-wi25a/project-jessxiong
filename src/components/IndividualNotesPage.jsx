import React from 'react';
import { useParams } from 'react-router';

import { CardList  } from "./CardList.jsx";
import { SearchByDate } from "./SearchByDate.jsx";

export function IndividualNotesPage(props) {
    const { cardtitle } = useParams();
    
    return (
        <div>
            <h1>Notes for {cardtitle} </h1>
            <SearchByDate />
            <CardList titleNames={props.titleNames}/>
        </div>
    )
}
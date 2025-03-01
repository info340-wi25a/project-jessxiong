import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export function SearchBySubject(props) {

    const optionsArray = props.titleNames.map( (title) => {
        const transformed = (
            <option value={title}>{title}</option>
        )
        return transformed;
    })
    
    
    
    return (
        <div className="container">
            <form className="searchBar">
                <label for="search keyword">Search: </label>
                <input className="form-control me-2" type="search" placeholder="Type keyword.." />
                <select>
                    {optionsArray}
                </select>
                <button className="btn buttonStyle" type="submit">Search</button>
            </form>
        </div>
    )
}
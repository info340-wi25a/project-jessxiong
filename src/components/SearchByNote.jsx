import React from 'react';

export function SearchByNote(props) {
    const {userKeyword, handleInput, applyFilter} = props;

    function handleClick(event) {
        event.preventDefault();
        applyFilter(userKeyword);
    }
    

    
    
    return (
        <div className="container">
            <form className="searchbar">
                <label htmlFor="search keyword">Search: </label>
                <input className="form-control me-2 styling-bar"id="search keyword" type="search" placeholder="Type keyword.." value={userKeyword} onChange={handleInput} required/>
                <button className="btn button-style" type="submit" onClick={handleClick}>Search</button>
            </form>
        </div>
    )
}

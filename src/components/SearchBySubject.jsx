import React from 'react';


export function SearchBySubject(props) {
    const {selected, userKeyword, handleSelect, handleInput, applyFilter} = props;

    const optionsArray = props.titleNames.map( (title) => {
        const transformed = (
            <option key={title}>{title}</option>
        )
        return transformed;
    })

    const handleClick = (event) => {
        event.preventDefault();
        applyFilter(userKeyword, selected);
    }
    

    
    
    return (
        <div className="container">
            <form className="searchbar">
                <label htmlFor="search keyword">Search: </label>
                <input className="form-control me-2"id="search keyword" type="search" placeholder="Type keyword.." value={userKeyword} onChange={handleInput} required/>
                <select onChange={handleSelect}>
                    <option key="none">none</option>
                    {optionsArray}
                </select>
                <button className="btn button-style" type="submit" onClick={handleClick}>Search</button>
            </form>
        </div>
    )
}
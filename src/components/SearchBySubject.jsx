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
            <form className="searchBar">
                <label for="search keyword">Search: </label>
                <input className="form-control me-2" type="search" placeholder="Type keyword.." value={userKeyword} onChange={handleInput}/>
                <select onChange={handleSelect}>
                    <option key="none">none</option>
                    {optionsArray}
                </select>
                <button className="btn buttonStyle" type="submit" onClick={handleClick}>Search</button>
            </form>
        </div>
    )
}
import React from 'react';

export function SearchByDate(props) {
    return (
        <div className="container">
            <form className="searchbar">
                <label htmlFor="Search: ">Search: </label>
                <input className="form-control me-2" id="Search: " type="date" placeholder="Search Date..." />
                {/* <select>
                    <option>02-02-2025</option>
                    <option>02-03-2025</option>
                    <option>02-04-2025</option>
                    <option>02-05-2025</option>
                    <option>02-06-2025</option>
                </select> */}
                <button className="btn button-style" type="submit">Search</button>
            </form>
        </div>
    )
}
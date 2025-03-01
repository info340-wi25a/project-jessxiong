import React from 'react';

export function SearchByDate(props) {
    return (
        <div class="container">
            <form class="searchBar">
                <label for="Search: ">Search: </label>
                <input class="form-control me-2" type="date" placeholder="Search Date..." />
                {/* <select>
                    <option>02-02-2025</option>
                    <option>02-03-2025</option>
                    <option>02-04-2025</option>
                    <option>02-05-2025</option>
                    <option>02-06-2025</option>
                </select> */}
                <button class="btn buttonStyle" type="submit">Search</button>
            </form>
        </div>
    )
}
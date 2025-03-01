import React from 'react';

export function SearchByDate(props) {
    return (
        <div class="container">
            <form class="searchBar">
                <label for="Search: ">Search: </label>
                <input class="form-control me-2" type="search" placeholder="Type keyword.." />
                <div class="d-flex justify-content-center">
                    <a class="fa fa-calendar"><div
                        class="border rounded"
                        data-coreui-locale="en-US"
                        data-coreui-start-date="2024/02/13"
                        data-coreui-toggle="calendar"
                      ></div></a>
                </div>
                <select>
                    <option>02-02-2025</option>
                    <option>02-03-2025</option>
                    <option>02-04-2025</option>
                    <option>02-05-2025</option>
                    <option>02-06-2025</option>
                </select>
                <button class="btn buttonStyle" type="submit">Search</button>
            </form>
        </div>
    )
}
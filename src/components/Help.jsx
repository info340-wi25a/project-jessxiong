import React from 'react';

export function Help() {    
    
    return (
        <div className="instructions">
            <h1>About FocusFlow!</h1>
            <h2>To Do</h2>
            <h3>Description for To Do</h3>
            <h2>Timer</h2>
            <h3>Description for Timer</h3>
            <h2>Notes</h2>
            <ul>
                <li>
                    You can navigate to the Notes Page through clicking on the "Notes" text on the navigation bar that is located at the top of the page
                </li>
                <li>
                    After clicking "Notes", you will be taken to "Subject Notes Page" where you can add and delete subject folders and also access previous notes. To access your notes, click on the image of the subject card. You can also sort and search by each subject.
                </li>
                <li>
                    After clicking a subject card, you will be taken to "Notes for (Subject)" page where you can add, delete, and edit notes within the subject folder. You can search through your notes through date.
                </li>
            </ul>
        </div>
    )
}
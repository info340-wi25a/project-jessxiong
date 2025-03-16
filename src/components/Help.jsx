import React from 'react';

export function Help() {    
    
    return (
        <div className="instructions">
            <h1>About FocusFlow!</h1>
            <h2>To Do</h2>
                <p>
                    Use the To-Do lists to keep track of your tasks for today, as well as create any kind of To-do list category you would like. Add tasks and create new lists as needed!
                </p>
                <ul>
                    <li>
                        To create a new to do list, simply enter the name of the list and click 'Create List'
                    </li>
                    <li>
                        To add a new task to a list, write the name of the task, choose the list to add it to, and click 'Add Task'
                    </li>
                    <li>
                        Check each task as you finish. Once you're ready, click 'Remove Finished' to remove finished tasks. View these by clicking 'View Past Tasks' at the bottom of the page
                    </li>
                    <li>
                        Made a mistake? No worries! Check any task or list you wish delete then click the trash icon
                    </li>
                </ul>
            <h2>Timer</h2>
                <ul>
                    <li>
                        Set your focus and break time, then press 'Start' to begin the timer. 
                    </li>
                    <li>
                        The timer will count down your focus session, then automatically switch to a break before resetting for the next session.
                    </li>
                    <li>
                        If you want to skip the break and immediately start a new focus session, press the 'Skip Break' button. 
                        This will return you to focus time without waiting for the break to finish.
                    </li>
                </ul>
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
                <li>
                    If you click on existing files in the subject folder, you will be able to edit notes. And once you save the edits on the notes, you will be taken back to the subject folder and see the lists of notes again.
                </li>
            </ul>

            <footer>
            <p>
                Image from Unsplash&copy;
            </p>
            </footer>
        </div>

        
    )
}
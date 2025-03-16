import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Timer } from './Timer';

export function EditNote(props) {
    const { subjecttitle, cardtitle } = useParams();
    const { noteBySubject, handleUpdateNote } = props;

    const currentSubject = noteBySubject.find((subject) => subject.subject === subjecttitle);
    const currentNote = currentSubject?.notes.find((note) => note.title === cardtitle) || { title: cardtitle, content: "" };

    const [noteContent, setNoteContent] = useState(currentNote.content);

    const goTo = useNavigate();

    function handleContent(event) {
        setNoteContent(event.target.value);
    }

    function handleBack(event) {
        goTo("/subject/" + subjecttitle);
    }

    function handleSave() {
        handleUpdateNote(subjecttitle, cardtitle, noteContent);
        goTo("/subject/" + subjecttitle);
    }
    
    return (
        <section className="edit-note">
            <button className="btn button-style back-button" type="submit" onClick={handleBack}>Back</button>
            <div className="container">
                <h1 className="note-title">{cardtitle}</h1>
                <div className="edit-note-header">              
                    <div className="note">
                        <textarea 
                            className="content" 
                            placeholder="Write your notes..."
                            value={noteContent}
                            onChange={handleContent}
                            required 
                        />
                        <div className="image">
                            <form className="add-image">
                                <input type="file" id="img" className="img" accept="image/*" required />
                                <label htmlFor="add-image"></label>
                            </form>
                        </div>
                    </div>
                    <div className="timer-in-edit">
                        <Timer defaultFocusTime={25} defaultBreakTime={5} />
                    </div>
                </div>
                <div className="add-note">
                    <button className="btn button-style" type="submit" onClick={handleSave}>Save Note</button>
                </div>
            </div>
        </section>
    );
}
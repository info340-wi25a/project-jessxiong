import React from 'react';
import { useParams, useNavigate, Link } from 'react-router';
import { Timer } from './Timer';

export function EditNote(props) {
    const {subjecttitle, cardtitle} = useParams();
    const goTo = useNavigate();

    function handleBack(event) {
        goTo("/subject/" + subjecttitle);
    }
    
    return (
        <section className="edit-note">
            <button className="btn button-style back-button" type="submit" onClick={handleBack}>Back</button>
            <div className="container">
                <h1 className="note-title">{cardtitle}</h1>
                <div className="edit-note-header">              
                    <div className="note">
                        <input type="text" id="title" className="title" placeholder="Enter title" required />
                        <textarea className="content" placeholder="Write your notes..." required />
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
                    <Link to={"/subject/" + subjecttitle}>
                        <button className="btn button-style" type="submit">Save Note</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}


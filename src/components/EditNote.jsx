import React from 'react';

export function EditNote(props) {

    return (
        <section className="edit-note">
            <div className="container">
                <h1 className="folder-title">INFO 340</h1>
                <div className="note">
                    <input type="text" className="title" placeholder="Enter title" required />
                    <textarea className="content" placeholder="Write your notes..."></textarea>
                    <div className="add-image">
                        <form action="/action_page.php">
                            <input type="file" id="img" name="img" accept="image/*" required />
                            <label for="add-image"></label>
                        </form>
                    </div>
                </div>
                <div className="add-note">
                    <button className="btn buttonStyle" type="submit">
                        <a className="nav-link" href="notesPage2.html">Save Note</a>
                    </button>
                </div>
            </div>
        </section>
    );
}

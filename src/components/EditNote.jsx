import React from 'react';

export function EditNote(props) {

    return (
        <section className="edit-note">
            <div className="container">
                <h1 class="folder-title">INFO 340</h1>
                <div class="note">
                    <input type="text" class="title" placeholder="Enter title" required />
                    <textarea class="content" placeholder="Write your notes..."></textarea>
                    <div class="add-image">
                        <form action="/action_page.php">
                            <input type="file" id="img" name="img" accept="image/*" required />
                            <label for="add-image"></label>
                        </form>
                    </div>
                </div>
                <div class="add-note">
                    <button class="btn buttonStyle" type="submit">
                        <a class="nav-link" href="notesPage2.html">Save Note</a>
                    </button>
                </div>
            </div>
        </section>
    );
}

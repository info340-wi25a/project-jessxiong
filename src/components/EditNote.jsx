import React from 'react';
import { useParams, Link } from 'react-router';

export function EditNote(props) {
    // console.log({cardtitle})
    // console.log({titleNames})

    const {cardtitle, subjecttitle} = useParams();

    return (
        <section className="edit-note">
            <div className="container">
                <h1 className="note-title">{cardtitle}</h1>
                <div className="note">
                    <input type="text" className="title" placeholder="Enter title" required />
                    <textarea className="content" placeholder="Write your notes..."></textarea>
                    <div className="add-image">
                        <form action="/action_page.php">
                            <input type="file" id="img" name="img" accept="image/*" required />
                            <label htmlFor="add-image"></label>
                        </form>
                    </div>
                </div>
                <div className="add-note">
                    {/* <Link to={"/subject/" + cardtitle + "/" + subjecttitle}> */}
                    <Link to={"/subject/" + cardtitle}>
                        <button className="btn button-style" type="submit">Save Note</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
import React from 'react';
import { Link } from 'react-router';
import { MdDelete } from "react-icons/md";




export function CardListSubject(props) {
    const {newSubject, handleAddSubjectClick, handleInputAddCard, handleDelete} = props;
    
    const cardTitleArray = props.titleNames.map((name) => {
        const transformed = (<CardSubject key={name} title={name} handleDelete={handleDelete} />);
        return transformed
    })


    return(
        <div className="container">
            <div className="row">
                {cardTitleArray}
                <AddCardSubject newSubject={newSubject} handleAddSubjectClick={handleAddSubjectClick} handleInputAddCard={handleInputAddCard} />
            </div>
        </div>
    )
}

export function CardListNotes(props) {
    const {newNote, handleAddNoteClick, handleInputAddNoteCard, handleDelete} = props;
    
    const cardTitleArray = props.titleNames.map((name) => {
        const transformed = (<CardNotes key={name} title={name} handleDelete={handleDelete} />);
        return transformed
    })


    return(
        <div className="container">
            <div className="row">
                {cardTitleArray}
                <AddCardNotes newNote={newNote} handleAddNoteClick={handleAddNoteClick} handleInputAddNoteCard={handleInputAddNoteCard} />
            </div>
        </div>
    )
}

function CardSubject(props) {
    // let imgURL = "img/" + props.name;
    // imgURL += "Cover.jpg";
    let cardURL = "/subject/" + props.title;
    

    const handleClick = (event) => {
        props.handleDelete(props.title)
    }
    
    //console.log(imgURL)
    return (
    <div className="col-sm-12 col-lg-3">
        <div className="card h-100">
        <Link to={cardURL}>
            <img className="pb-3 card-img-top" src="../img/NotesCover.jpg" alt={props.title} />
        </Link>
            <div className="card-body subject">
                <div className="cardText">
                    <h2 className="card-title"> {props.title} </h2>
                    <MdDelete className="delete" onClick={handleClick} />
                </div>
            </div>
        </div>
    </div>

    )
}

function CardNotes(props) {
    // let imgURL = "img/" + props.name;
    // imgURL += "Cover.jpg";
    let cardURL = "/subject/" + props.title + "/edit";

    const handleClick = (event) => {
        props.handleDelete(props.title)
    }
    
    //console.log(imgURL)
    return (
    <div className="col-sm-12 col-lg-3">
        <div className="card h-100">
            <Link to={cardURL}>
            <img className="pb-3 card-img-top" src="../img/NotesCover.jpg" alt={props.title} />
            </Link>
            <div className="card-body subject">
                <div className="cardText">
                    <h2 className="card-title"> {props.title} </h2>
                    <MdDelete className="delete" onClick={handleClick}/>
                </div>
            </div>
        </div>
    </div>

    )
}

export function AddCardSubject(props) {
    const {newSubject, handleAddSubjectClick, handleInputAddCard} = props;

    return (
        <div className="col-sm-12 col-lg-3">
            <div className="card h-100">
                <div className="card-body subject">
                    <h2 className="card-title addCard"> Add a New Card </h2>
                    <form className="footer-element addSubject">
                        <label for="subject_name">Title: </label>
                        <input className="SubjectName form-control me-2" type="text" placeholder="Enter..." value={newSubject} onChange={handleInputAddCard}/>
                    </form>
                    <div className="addButton">
                        <button type="submit" class="addButton btn buttonStyle" onClick={handleAddSubjectClick}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function AddCardNotes(props) {
    const {newNote, handleAddNoteClick, handleInputAddNoteCard} = props;

    return (
        <div className="col-sm-12 col-lg-3">
            <div className="card h-100">
                <div className="card-body subject">
                    <h2 className="card-title addCard"> Add a New Card </h2>
                    <form className="footer-element addSubject">
                        <label for="subject_name">Title: </label>
                        <input className="SubjectName form-control me-2" type="text" placeholder="Enter..." value={newNote} onChange={handleInputAddNoteCard}/>
                    </form>
                    <div className="addButton">
                        <button type="submit" class="addButton btn buttonStyle" onClick={handleAddNoteClick}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

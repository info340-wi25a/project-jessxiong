import React from 'react';
import { Link } from 'react-router';
import { MdDelete } from "react-icons/md";




export function CardListSubject(props) {
    const {newSubject, handleAddSubjectClick, handleInputAddCard, handleDelete} = props;
    
    const cardTitleArray = props.titleNames.map((name) => {
        const transformed = <CardSubject key={name} title={name} handleDelete={handleDelete} />;
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
    const {newNote, handleAddNoteClick, handleInputAddNoteCard, handleDelete, subjecttitle} = props;
    
    const cardTitleArray = props.titleNames.map((name) => {
        const transformed = <CardNotes key={name} title={name} subjecttitle={subjecttitle} handleDelete={handleDelete} />;
        return transformed
    })


    return(
        <div className="container">
            <div className="row">
                {cardTitleArray}
                <AddCardNotes newNote={newNote} handleAddNoteClick={handleAddNoteClick} handleInputAddNoteCard={handleInputAddNoteCard} subjecttitle={subjecttitle}/>
            </div>
        </div>
    )
}

function CardSubject(props) {
    let cardURL = "/subject/" + props.title;

    function handleClickDelete(event) {
        props.handleDelete(props.title)
    }
    
    return (
    <div className="col-sm-12 col-lg-3">
        <div className="card h-100">
        <Link to={cardURL}>
            <img className="pb-3 card-img-top" src="../img/subjectCover.jpg" alt={props.title} />
        </Link>
            <div className="card-body subject">
                <div className="card-text">
                    <h2 className="card-title"> {props.title} </h2>
                    <MdDelete className="delete" onClick={handleClickDelete} />
                </div>
            </div>
        </div>
    </div>

    )
}

function CardNotes(props) {
    const {subjecttitle, title, handleDelete} = props;
     let cardURL = "/subject/" + subjecttitle + "/" + title + "/edit";

    function handleClick(event) {
        handleDelete(subjecttitle, title)
    }

    return (
    <div className="col-sm-12 col-lg-3">
        <div className="card h-100">
            <Link to={cardURL}>
                <img className="pb-3 card-img-top" src="../img/noteCover.jpg" alt={props.title} />
            </Link>
            <div className="card-body subject">
                <div className="card-text">
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
                    <h2 className="card-title add-card"> Add New Subject </h2>
                    <form className="footer-element add-subject">
                        <label htmlFor="subject_name">Title: </label>
                        <input className="SubjectName form-control me-2" id="subject_name" type="text" placeholder="Enter..." value={newSubject} onChange={handleInputAddCard} required/>
                    </form>
                    <div className="add-button">
                        <button type="submit" className="add-button btn button-style" onClick={handleAddSubjectClick}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function AddCardNotes(props) {
    const {newNote, handleAddNoteClick, handleInputAddNoteCard, subjecttitle} = props;

    function handleClick(event) {
        handleAddNoteClick(event, subjecttitle);
    }

    return (
        <div className="col-sm-12 col-lg-3">
            <div className="card h-100">
                <div className="card-body subject">
                    <h2 className="card-title add-card"> Add a New Note </h2>
                    <form className="footer-element add-subject">
                        <label htmlFor="subject_name">Title: </label>
                        <input className="SubjectName form-control me-2" id="subject_name" type="text" placeholder="Enter..." value={newNote} onChange={handleInputAddNoteCard} required/>
                    </form>
                    <div className="add-button">
                        <button type="submit" className="add-button btn button-style" onClick={handleClick}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
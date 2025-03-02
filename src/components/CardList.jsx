import React from 'react';
import { Link } from 'react-router';
import { MdDelete } from "react-icons/md";




export function CardList(props) {
    const {newSubject, handleAddSubjectClick, handleInputAddCard} = props;
    
    const cardTitleArray = props.titleNames.map((name) => {
        const transformed = (<Card key={name} title={name} />);
        return transformed
    })


    return(
        <div className="container">
            <div className="row">
                {cardTitleArray}
                <AddCard newSubject={newSubject} handleAddSubjectClick={handleAddSubjectClick} handleInputAddCard={handleInputAddCard} />
            </div>
        </div>
    )
}

function Card(props) {
    // let imgURL = "img/" + props.name;
    // imgURL += "Cover.jpg";
    let cardURL = "/subject/" + props.title;
    
    //console.log(imgURL)
    return (
    <div className="col-sm-12 col-lg-3">
        <div className="card h-100">
            <Link to={cardURL}>
            <img className="pb-3 card-img-top" src="../img/NotesCover.jpg" alt={props.title} />
            <div className="card-body subject">
                <div className="cardText">
                    <h2 className="card-title"> {props.title} </h2>
                    <MdDelete className="delete" />
                </div>
            </div>
            </Link>
        </div>
    </div>

    )
}

export function AddCard(props) {
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

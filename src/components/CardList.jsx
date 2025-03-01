import React from 'react';

export function CardList(props) {
    const cardTitleArray = props.titleNames.map((name) => {
        const transformed = (<Card key={name} title={name} />);
        return transformed
    })


    return(
        <div className="container">
            <div className="row">
                {cardTitleArray}
            </div>
        </div>
    )
}

function Card(props) {
    // let imgURL = "img/" + props.name;
    // imgURL += "Cover.jpg";
    
    //console.log(imgURL)
    return (
    <div className="col-sm-12 col-lg-3">
        <div className="card h-100">
            {/* <a href="notesPage2.html"> */}
            <img className="pb-3 card-img-top" src="../img/NotesCover.jpg" alt={props.title} />
            <div className="card-body subject">
                <div className="cardText">
                    <h2 className="card-title"> {props.title} </h2>
                    {/* <a className="material-icons delete">delete</a> */}
                </div>
            </div>
            {/* </a> */}
        </div>
    </div>

    )
}

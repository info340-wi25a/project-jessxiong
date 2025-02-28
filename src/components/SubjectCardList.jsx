import React from 'react';

const subjectNames = ["INFO340", "INFO360", "INFO380", "CSE373", "CSE414"];

export function SubjectCardList(props) {
    const subjectCardArray = subjectNames.map((subject) => {
        const transformed = (<SubjectCard key={subject} subjectName={subject} />);
        return transformed
    })


    return(
        <div className="container">
            <div className="row">
                {subjectCardArray}
            </div>
        </div>
    )
}

function SubjectCard(props) {
    let imgURL = "img/" + props.subjectName;
    imgURL += "Cover.jpg";
    
    console.log(imgURL)
    return (
    <div className="col-sm-12 col-lg-3">
        <div className="card h-100">
            {/* <a href="notesPage2.html"> */}
            <img className="pb-3 card-img-top" src={imgURL} alt={props.subjectName} />
            <div className="card-body subject">
                <div className="cardText">
                    <h2 className="card-title"> {props.subjectName} </h2>
                    {/* <a className="material-icons delete">delete</a> */}
                </div>
            </div>
            {/* </a> */}
        </div>
    </div>

    )
}

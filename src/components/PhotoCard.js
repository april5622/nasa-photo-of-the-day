import React from "react";

const PhotoCard = props => {
    return (
    <div className="Photo-list">
        <h3>{props.title}</h3>
        <p>{props.date}</p>
        <p className= "exp">{props.explanation}</p>
        <img src={props.hdurl}/>
        <img src={props.url}/>
        <p>{props.copyright}</p>
    </div>

    );
}

export default PhotoCard;
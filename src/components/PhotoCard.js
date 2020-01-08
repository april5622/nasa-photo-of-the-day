import React from "react";

const PhotoCard = props => {
    return (
    <div className="Photo-list">
        <h3>{props.title}</h3>
        <p>{props.copyright}</p>
        <p>{props.date}</p>
        <p>explanation: {props.explanation}</p>
        <img src={props.hdurl}/>
        <img src={props.url}/>
    </div>

    );
}


export default PhotoCard;
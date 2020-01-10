import React from "react";
import styled, {css} from 'styled-components';

const TitleH3 = styled.h3`
    color: white;
`;

const Paragraph = styled.p`
    color: white;

    ${props =>
        props.type === "primary" &&
        css`
          color: blue;
        `}

        ${props =>
            props.type === "secondary" &&
            css`
              font-size: 30px;
              border-top dotted;
              color: white;
              background: #144CCD;
            `}
`;

const PhotoCard = props => {
    return (
    <div className="Photo-list">
        <TitleH3>{props.title}</TitleH3>
        <Paragraph type="primary">{props.date}</Paragraph>
        <Paragraph className= "exp">{props.explanation}</Paragraph>
        <img src={props.hdurl}/>
        <img src={props.url}/>
        <Paragraph type="secondary">{props.copyright}</Paragraph>
    </div>

    );
}

export default PhotoCard;
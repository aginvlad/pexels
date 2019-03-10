import React from 'react';
import './BackgroundAuthor.sass';

const backgroundAuthor = (props) => {
    return(
        <div className="bg-author">
            <a href={props.photographerUrl} target="_blank" rel="noopener noreferrer"
                className="bg-author__link">Photo by {props.photographer}
            </a>
        </div>
    );
};

export default backgroundAuthor;
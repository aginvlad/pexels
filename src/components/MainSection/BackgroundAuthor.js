import React from 'react';
import './BackgroundAuthor.sass';

const backgroundAuthor = (props) => {
    return(
        <div className="bg-author">
            <a href={props.photographerUrl} onClick={
                () => {
                    let win = window.open(props.photographerUrl, '_blank');
                    win.focus();
                    }
                } 
                className="bg-author__link">Photo by {props.photographer}
            </a>
        </div>
    );
};

export default backgroundAuthor;
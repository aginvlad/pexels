import React from 'react';

import SearchBox from './SearchBox';
import Suggested from './Suggested';
import BackgroundAuthor from './BackgroundAuthor';

import './MainSection.sass';

const mainSection = (props) => {
    return(
        <section className="main-section">
            <div className="main-section-background">
                <img src={props.bg} alt="background" />
            </div>
            <div className="main-section-content">
                <h1>The best free stock photos shared by talented photographers.</h1>
                <SearchBox />
                <Suggested />
            </div>
            <BackgroundAuthor photographer={props.photographer}
                              photographerUrl={props.photographerUrl} />
        </section>
    );
};

export default mainSection;
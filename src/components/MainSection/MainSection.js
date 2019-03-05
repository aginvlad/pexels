import React from 'react';

import SearchBox from './SearchBox';
import Suggested from './Suggested';
import BackgroundAuthor from './BackgroundAuthor';

import './MainSection.sass';

const mainSection = (props) => {
    return(
        <section className="main-section">
            <div className="main-section-background">
                <img src={`${props.bg}?auto=compress&bri=0&cs=tinysrgb&fit=crop&h=350.0&sharp=10&w=1400`} srcSet={`${props.bg}?auto=compress&bri=0&cs=tinysrgb&fit=crop&h=250.0&sharp=10&w=1000 1000w,${props.bg}?auto=compress&bri=0&cs=tinysrgb&fit=crop&h=375.0&sharp=10&w=1500 1500w,${props.bg}?auto=compress&bri=0&cs=tinysrgb&fit=crop&h=500.0&sharp=10&w=2000 2000w,${props.bg}?auto=compress&bri=0&cs=tinysrgb&fit=crop&h=625.0&sharp=10&w=2500 2500w,${props.bg}?auto=compress&bri=0&cs=tinysrgb&fit=crop&h=750.0&sharp=10&w=3000 3000w,${props.bg}?auto=compress&bri=0&cs=tinysrgb&fit=crop&h=875.0&sharp=10&w=3500 3500w,${props.bg}?auto=compress&bri=0&cs=tinysrgb&fit=crop&h=1000.0&sharp=10&w=4000 4000w,${props.bg}?auto=compress&bri=0&cs=tinysrgb&fit=crop&h=1250.0&sharp=10&w=5000 5000w`} alt="background" />
            </div>
            <div className="main-section-content">
                <h1>The best free stock photos shared by talented photographers.</h1>
                <SearchBox useClass="searchbox" color="#222" />
                <Suggested />
            </div>
            <BackgroundAuthor photographer={props.photographer}
                              photographerUrl={props.photographerUrl} />
        </section>
    );
};

export default mainSection;

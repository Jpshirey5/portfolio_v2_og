import React from 'react';
import Fade from 'react-reveal/Fade';

export default function Main() {
    return (
        <Fade top distance='10%' duration={1500}>
            <div className='intro'>
                <h4>Hi, my name is</h4>
                <h1>John Shirey.</h1>
                <h1>Full Stack Developer.</h1>
                <h4>Equipped with specialized training in strategic design and development,
                    I am focused on creating, building and integrating human-centered experiences onto the web.</h4>
            </div>
        </Fade>
    );
}

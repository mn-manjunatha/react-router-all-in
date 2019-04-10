import React from 'react';
import { error } from 'util';

const Hero = (props) => {
    if (props.heroName === 'Joker') {
        throw error('not a hero');
    }
    return (
        <div>{props.heroName}</div>
    );
}

export default Hero; 
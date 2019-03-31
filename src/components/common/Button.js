import React from 'react';
import stylesWrappers from './../higher-order-components/HOC/stylesWrappers';


const Button=(props)=>{
    console.log(props);

    return(
        <button style={props.styles} onClick={props.buttonClick}>I am ButtonOne</button>
    );
}

export default stylesWrappers(Button);



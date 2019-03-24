import React from 'react';
import GrandChild from './GrandChild'

const Child = (props) => {
    const changeTheWorld = (message) => {
        props.doWhatever(message);
    }
    return (
        <div>
            <h1>child</h1>
            <br/>
            <button onClick={changeTheWorld.bind(this,'from child')}>{props.title}</button>
            <GrandChild {...props}/>
        </div>
    );
}

export default Child;
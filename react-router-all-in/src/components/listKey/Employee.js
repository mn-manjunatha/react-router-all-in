import React from 'react';

const Employee = (props) => {
    return (
        <li>
        <span>name:{props.children},age={props.age}</span>
        <input onChange={props.changeEvent} type="text" value={props.children} />
        <button onClick={props.delEvent}>Delete</button>
        </li>
    );
}

export default Employee;
import React from 'react';
import { isNull } from 'util';

const MyInput = (props) => {
  return (
    <input
      ref={props.inputRef}
      type="text" />
  );
}

const FuncCustomComp = () => {
  let inputRef = null;

  const onClick = () => {
    inputRef.focus();
  }

  return (
    <div>
      <div>
        <span>My input:</span>
        <MyInput
          inputRef={(input) => { inputRef = input }}
        />
      </div>
      <div>
        <input
          type="submit"
          value="Submit"
          onClick={onClick}
        />
      </div>
    </div>
  );
}

class RefsAndDOM extends React.Component {

  onClick = () => {
    console.log(this.firstName.value);
    alert(`Hi ${this.firstName.value} ${this.lastName.value} submitted! :)`);
    this.firstName.focus();
  }

  onKeyUp = (target, e) => {
    console.log(target, e.keyCode);
    if (e.keyCode === 13) {
      switch (target) {
        case 'firstName':
          this.lastName.focus();
          break;
        case 'lastName':
          this.age.focus();
          break;
        case 'age':
          this.submit.focus();
          break;
        default:
          this.firstName.focus();
          break;
      }
    }
  }

  render() {
    return (
      <div>
        <h1>Refs And DOM</h1>
        <FuncCustomComp />
        <div>
          <span>First Name:</span>
          <input
            ref={(input) => { this.firstName = input }}
            onKeyUp={this.onKeyUp.bind(this, 'firstName')}
            type="text" />
        </div>
        <div>
          <span>Last Name:</span>
          <input
            ref={(input) => { this.lastName = input }}
            onKeyUp={this.onKeyUp.bind(this, 'lastName')}
            type="text" />
        </div>
        <div>
          <span>Age:</span>
          <input
            ref={(input) => { this.age = input }}
            onKeyUp={this.onKeyUp.bind(this, 'age')}
            type="text" />
        </div>
        <div>
          <input ref={(input) => { this.submit = input }}
            type="submit"
            value="Submit"
            onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default RefsAndDOM;

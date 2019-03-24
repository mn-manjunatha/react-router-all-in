import React from 'react';

class Event extends React.Component {
  state = {
    name: 'Mnm'
  }
  changeName = (newName) => {
    this.setState({ name: newName });
  }

  changeNameFromInput = (event) => {
    this.setState({ name: event.target.value });
  }


  render() {
    return (
      <div> 

        <div>{this.state.name}</div>
        <br/>
        <button onClick={() => this.changeName('rao')}>Rao: using anouminous function</button>
        <br/>
        <button onClick={this.changeName.bind(this,'Manjunath')}>Manjunath:betterone - using bind function</button>
        <br/>
        <input onChange={this.changeNameFromInput} type="text" value={this.state.name} /> 
      </div>
    );
  }
}

export default Event;

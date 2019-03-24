import React from 'react';
import Child from './Child'

class Parent extends React.Component {
  state = { title: 'place holder title' }

  changeTheWorld = (newTitle) => {
    this.setState({ title: newTitle })
  }

  render() {
    return (
      <div>
        <h1>Parent to child</h1>
        <p>React components communication tutorial | parent to child | siblings | grand parents to grand child.</p>
        <h2>{this.state.title}</h2>
        <Child doWhatever={this.changeTheWorld} title={this.state.title} />
      </div>
    );
  }
}

export default Parent;

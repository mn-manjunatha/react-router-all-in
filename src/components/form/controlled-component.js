import React from 'react';

class ControlledComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      comments: '',
      topic: 'react'
    }
  }

  onUserChange = (event) => {
    this.setState({ username: event.target.value });
  }

  onCommentsChange = (event) => {
    this.setState({ comments: event.target.value });
  }

  onTopicChange = (event) => {
    this.setState({ topic: event.target.value });
  }

  onSubmit = (event) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Form/Controlled Component</h1>
        <div>
          <label>Username</label>
          <input type='text' value={this.state.username} onChange={this.onUserChange} />
        </div>
        <div>
          <label>Comments</label>
          <textarea value={this.state.comments} onChange={this.onCommentsChange}></textarea>
        </div>
        <div>
          <label>Topics</label>
          <select value={this.state.topic}
            onChange={this.onTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="Vue">Vue</option>
          </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

export default ControlledComponent;

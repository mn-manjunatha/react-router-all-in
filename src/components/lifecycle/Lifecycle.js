import React from "react";
import Child from "./Child";

class Lifecycle extends React.Component {
  constructor() {
    super();
    this.state = { name: "Jhon" };
    console.log("constructor");
  }

  componentWillMount() {
    if (window.innerWidth <= 800) {
      this.setState({ innerWidth: window.innerWidth });
    }
    console.log("componentWillMount");
  }



  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  changeState = () => {
    this.setState({ name: 'jill' });
  }

  unmountChild = () => {
    this.setState({ name: 'abc' });
  }

  render() {
    console.log("render");

    // if(this.state.name==="abc"){
    //   return (<div/>)
    // }

    return (
      <React.Fragment>
        <div>
          parent name: {this.state.name} | innerWidth: {this.state.innerWidth}
        </div>
        <div> {this.state.name === "abc" ? <div /> : <Child name={this.state.name} />}</div>
        <button onClick={this.changeState.bind(this)}>change state</button>
        <button onClick={this.unmountChild.bind(this)}>Unmount child</button>
      </React.Fragment>
    );
  }
}

export default Lifecycle;

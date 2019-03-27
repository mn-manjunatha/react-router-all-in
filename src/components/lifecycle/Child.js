import React from 'react';

class Child extends React.Component {
  constructor() {
    super();
    console.log('Child constructor')
  }

  componentWillMount() {
    console.log('Child componentWillMount')
  }

  componentDidMount() {
    console.log('Child componentDidMount');
  }
  componentWillReceiveProps() {
    console.log("child componentWillReceiveProps");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("child shouldComponentUpdate");
    return true;
  }

  componentWillUpdate() {
    console.log("child componentWillUpdate");
  }
  componentDidUpdate() {
    console.log("child componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("child componentWillUnmount");
  }

  render() {
    console.log('Child render');
    return (
      <div>
        Child name: {this.props.name}
      </div>
    );
  }
}

export default Child;

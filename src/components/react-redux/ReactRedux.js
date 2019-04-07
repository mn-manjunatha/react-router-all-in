import React from 'react';
import {connect} from 'react-redux';
class ReactRedux extends React.Component {
  // state={
  //   age:21
  // }

  // onAgeUP = ()=>{
  //   this.setState({
  //     ...this.state,
  //     age:++this.state.age
  //   })
  // }
  // onAgeDown= ()=>{
  //   this.setState({
  //     ...this.state,
  //     age:--this.state.age
  //   })
  // }


  render() {
    return (
      <div>
        <h1>React Redux example</h1>
        <div>Age<span>{this.props.age}</span></div>
        <button onClick={this.props.onAgeUP}>Age UP</button>
        <button onClick={this.props.onAgeDown}>Age Close</button>
      </div>
    );
  }
}

const mapStateToProps =(store) =>{
  return {
    age:store.age
  }

}

const mapDispatchToProps =(dispatch )=>{
  return {
    onAgeUP:()=>dispatch({type:'AGE_UP'}),
    onAgeDown:()=>dispatch({type:'AGE_DOWN'}),
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (ReactRedux);

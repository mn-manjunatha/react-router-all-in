import React from 'react';
import MemoFunCom from './MemoFunCom';
import { setInterval } from 'timers';

class Memo extends React.Component {
    state ={
        val:1
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({val:1})
        },3000)
    }
  render() {
    console.log('parrent');
      
    return (
      <div>
        <h1>React Memo | new way to Memoize Functional Components, if state/props not render It won't render</h1>
        <MemoFunCom val={this.state.val }/>
      </div>
    );
  }
}

export default Memo;

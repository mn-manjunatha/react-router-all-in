import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/common/Header';
import Main from './Main';
import { Prompt } from 'react-router-dom';

class App extends Component {
  state = {
    logedIn: false
  }

  loginHandle = () => {
    this.setState((prevState) => ({
      logedIn: !prevState.logedIn
    }))
  }

  render() {
    return (
      <React.Fragment>
        <div>
        <button onClick={this.loginHandle.bind(this)}>{this.state.logedIn ? 'log out' : 'log in'}</button>
          <Header />
          <Main isLogedin={this.state.logedIn} />
          <Prompt
            when={!this.state.isLogedin}
            message={(location) => {
              return location.pathname.startsWith('/user') ? 'Are you sure?' : true
            }}/>
        </div>
        
      </React.Fragment>
    );
  }
}


//<input type="button" value={this.state.logedIn ? 'log out' : 'log in'} onClick={this.loginHandle.bind(this)}/> 

export default App;

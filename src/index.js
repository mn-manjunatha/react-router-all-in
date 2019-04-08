import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter } from 'react-router-dom';

import {Provider}  from 'react-redux';
import {createStore,combineReducers, applyMiddleware } from 'redux';
//import reducer from './store/reducer';
import thunk from 'redux-thunk';

import reducerFirst from './reducer/reducerFirst';
import puzzleReducer from './reducer/puzzleReducer';

const rootReducer = combineReducers({
  first:reducerFirst,
  puzzles:puzzleReducer

});

const logAction = store => {
    return next =>{
      return action =>{
        const result = next(action);
        console.log(`caught in middleware ${JSON.stringify(result)}`);
        return result;
      }
    }
}
 

 const store = createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}><App /></Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

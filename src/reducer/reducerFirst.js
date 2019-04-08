import * as types from '../actions/actionTypes';
import initialState from './initialState';

const reducer = (state = initialState.First, action) => {
    const newState = { ...state };
  
    switch (action.type) {
      case  types.AGE_UP:
        return {
          ...state,
          age: state.age + action.value,
          history: state.history.concat({
            id: Math.random(),
            age: state.age + action.value
          })
        };
        break;
  
      case  types.AGE_DOWN:
        return {
          ...state,
          age: state.age - action.value,
          history: state.history.concat({
            id: Math.random(),
            age: state.age - action.value
          })
        };
  
        case types.DEL_HISTORY:
        debugger;
        alert('aaaaaaaaaa');
        return {
          ...state,
          history:state.history.filter(el=> el.id!==action.key)
        };
    }
  
    return newState;
  };
  
  export default reducer;
  
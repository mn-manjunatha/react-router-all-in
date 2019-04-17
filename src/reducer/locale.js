import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function locale(state = initialState.lang, action) {
    switch (action.type) {
      case types.CHANGE_LANG:
      return Object.assign({}, state, {
        lang: action.lang,
      });
      default:
        return state;
    }
  }
  
import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function puzzleReducer(state = initialState.puzzle, action) {
  switch (action.type) {
    case types.PUZZLE_SET:
    return Object.assign({}, state, {
      selectedItem: action.selectedItem,
    });
    default:
      return state;
  }
}

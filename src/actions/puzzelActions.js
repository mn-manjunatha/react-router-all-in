//import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';
//import { beginAjaxCall } from './ajaxStatusActions';



export function moveItem(moveType) {
  return (dispatch, getState) => {
    let selectedItem = getState().puzzles.selectedItem;
    
    if (selectedItem == 0) {
      selectedItem = 5;
    }
    else {
      //const x = selectedItem%3;
      switch (moveType) {
        case 'up': {

          if (selectedItem - 3 > 0)
            selectedItem = selectedItem - 3;
        }
          break;
        case 'left': {
          if ((selectedItem - 1) % 3 !== 0)
            selectedItem = selectedItem - 1;
        }
          break;
        case 'right': {
          if (selectedItem % 3 !== 0)
            selectedItem = selectedItem + 1;
        }
          break;

        case 'down': {
          if (selectedItem + 3 < 10)
            selectedItem = selectedItem + 3;
        }
          break;

        default: {
          selectedItem = 0;
        }
      }
    }

    dispatch({
      type: types.PUZZLE_SET,
      selectedItem,
    });

  };
}

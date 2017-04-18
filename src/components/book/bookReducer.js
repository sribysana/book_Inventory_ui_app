import * as CONSTATS from '../../constants/actionTypes';
import {fromJS} from 'immutable';
const defaultState = fromJS({
  book: [],
  cart: [],
  editBook:{},
  editModalEnabled: false,
  isModalEnabled: false,
});

export default function bookReducer(state = defaultState, action) {
  let newState = state;

  switch (action.type) {
    case CONSTATS.UPDATE_BOOK:
      newState = newState.set('book', fromJS(action.books));
      break;
    case 'TOGGLE_MODAL':
      newState = newState.set('isModalEnabled', action.enabled)
      break;
    case CONSTATS.EDIT_BOOK:
      newState = newState.set('editBook', fromJS(action.editBook));
      break;
    case CONSTATS.TOGGLE_BOOK_EDITMODAL:
      newState = newState.set('editModalEnabled', action.editModalEnabled);
      break;
    default:
  }

  return newState;
}

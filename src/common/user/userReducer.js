import * as CONSTANTS from '../../constants/actionTypes';
import { fromJS } from 'immutable';
const defaultState = fromJS({
  user:{},
  cart:[],
});

export default function userReducer(state = defaultState, action) {
  let newState = state;

  switch (action.type) {
    case CONSTANTS.UPDATE_USER:
      newState = newState.set('user', fromJS(action.user));
      newState = newState.set('cart', fromJS(action.cart));
      break;
    default:
  }
  return newState;
}


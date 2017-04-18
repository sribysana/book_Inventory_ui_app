import * as CONSTANTS from '../../constants/actionTypes';
import { fromJS } from 'immutable';
const defaultState = fromJS({
  author: [],
});
export default function authorReducer(state = defaultState, action) {
  let nextState = state;
  switch (action.type) {
    case CONSTANTS.UPDATE_AUTHOR:
      console.log('CONSTANTS.UPDATE_AUTHOR new author :::::: authorReducer ', action);
      nextState = state.set('author', fromJS(action.authors));
      break;
    default:
  }

  return nextState;
}

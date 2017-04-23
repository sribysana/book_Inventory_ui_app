import * as CONSTANTS from '../../constants/actionTypes';
import {fromJS} from 'immutable';
const defaultState = fromJS({
  author: [],
  authorList: [],
});
export default function authorReducer(state = defaultState, action) {
  let nextState = state;
  switch (action.type) {
    case CONSTANTS.UPDATE_AUTHOR:
      console.log('CONSTANTS.UPDATE_AUTHOR new author :::::: authorReducer ', action);
      nextState = nextState.set('author', fromJS(action.authors));
      break;
    case CONSTANTS.UPDATE_AUTHOR_List:
      nextState = nextState.set('authorList', fromJS(action.authorList));
      break;
    default:
  }

  return nextState;
}

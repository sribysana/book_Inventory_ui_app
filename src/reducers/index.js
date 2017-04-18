import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import {routerReducer} from 'react-router-redux';
import userReducer from '../common/user/userReducer';
import bookPageReducer from '../components/book/bookPageReducer';
import authorReducer from '../components/author/authorReducer';

const rootReducer = combineReducers({
  fuelSavings,
  userReducer,
  bookPageReducer,
  authorReducer,
  routing: routerReducer,
});

export default rootReducer;

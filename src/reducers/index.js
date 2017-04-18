import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import {routerReducer} from 'react-router-redux';
import userReducer from '../common/user/userReducer';
import bookReducer from '../components/book/bookReducer';
import authorReducer from '../components/author/authorReducer';

const rootReducer = combineReducers({
  fuelSavings,
  userReducer,
  bookReducer,
  authorReducer,
  routing: routerReducer
});

export default rootReducer;

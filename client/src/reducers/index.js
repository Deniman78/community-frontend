import { combineReducers } from 'redux';
import accountReducer from './AccountReducer';

const reducers = combineReducers({
  account: accountReducer,
});

export default reducers;

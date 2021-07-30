import {
  AUTHORIZE_USER,
  UNAUTHORIZE_USER,
  REGISTER_USER,
  ACCOUNT_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
  user: null,
  error: null,
};

const accountReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTHORIZE_USER:
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case UNAUTHORIZE_USER:
      return {
        ...state,
        user: null,
        error: null,
      };
    case REGISTER_USER:
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case ACCOUNT_ERROR:
      return {
        ...state,
        user: null,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default accountReducer;

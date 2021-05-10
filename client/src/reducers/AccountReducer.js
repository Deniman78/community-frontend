import {
  AUTHORIZE_USER,
  UNAUTHORIZE_USER,
  REGISTER_USER,
} from '../actions/types';

const INITIAL_STATE = {
  user: null,
};

const accountReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTHORIZE_USER:
      return {
        ...state,
        user: action.payload,
      };
    case UNAUTHORIZE_USER:
      return {
        ...state,
        user: null,
      };
    case REGISTER_USER:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default accountReducer;

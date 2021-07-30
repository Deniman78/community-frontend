import {
  AUTHORIZE_USER,
  UNAUTHORIZE_USER,
  REGISTER_USER,
  ACCOUNT_ERROR,
} from './types';

import { AuthService } from '../service';

const authService = new AuthService();

export const authorizeUser = values => async dispatch => {
  const data = await authService.login(values);
  if (!data.status) {
    dispatch(accountError(data));
    return;
  }

  dispatch({
    type: AUTHORIZE_USER,
    payload: data,
  });
};

export const unauthorizeUser = data => ({
  type: UNAUTHORIZE_USER,
  payload: data,
});

export const registerUser = values => async dispatch => {
  const data = await authService.register(values);
  if (!data.status) {
    dispatch(accountError(data));
    return;
  }
  dispatch({
    type: REGISTER_USER,
    payload: data,
  });
};

export const accountError = error => ({
  type: ACCOUNT_ERROR,
  payload: error,
});

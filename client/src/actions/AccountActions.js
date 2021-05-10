import { AUTHORIZE_USER, UNAUTHORIZE_USER, REGISTER_USER } from './types';

export const authorizeUser = data => ({
  type: AUTHORIZE_USER,
  payload: data,
});

export const unauthorizeUser = data => ({
  type: UNAUTHORIZE_USER,
  payload: data,
});

export const registerUser = data => ({
  type: REGISTER_USER,
  payload: data,
});

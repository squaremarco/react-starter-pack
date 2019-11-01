import { createActions, handleActions } from 'redux-actions';

export const reducerOptions = { prefix: 'app' };
export const appAction = createActions({}, reducerOptions);

const initialState = {};

export default handleActions({}, initialState, reducerOptions);

export const appThunk = {};

import immutable from 'seamless-immutable';
import { handleActions } from 'redux-actions';
import reduceReducers from 'reduce-reducers';

import {
  changeNameRequest,
} from './actions';
import {
  GET_INFO_SUCCESS,
  ERROR_HANDLER,
} from './constants';

const initialState = immutable({
  username: '',
  info: {
    repos: [],
    orgs: [],
  },
  isInfoReceived: false,
  error: null,
});

const reducers = handleActions(
  {
    [changeNameRequest]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [GET_INFO_SUCCESS]: (state, action) => ({
      ...state,
      info: action.payload,
      isInfoReceived: true,
      error: null,
      username: '',
    }),
    [ERROR_HANDLER]: (state, action) => ({
      ...state,
      error: action.payload,
      isInfoReceived: false,
      username: '',
    }),
  },
  initialState,
);

export default reduceReducers(reducers);

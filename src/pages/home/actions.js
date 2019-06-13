import { createActions } from 'redux-actions';

import * as constants from './constants';

export const [{
  getInfoRequest,
  changeNameRequest,
  errorHandler,
}] = [createActions(
  constants.GET_INFO_REQUEST,
  constants.CHANGE_NAME_REQUEST,
  constants.ERROR_HANDLER,
)];

export default [{
  getInfoRequest,
  changeNameRequest,
  errorHandler,
}];

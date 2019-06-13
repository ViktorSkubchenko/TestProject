import axios from 'axios';
import {
  put,
  call,
  select,
  takeEvery,
} from 'redux-saga/effects';

import {
  GET_INFO_SUCCESS,
  CHANGE_NAME_SUCCESS,
  ERROR_HANDLER,
} from './constants';
import {
  getInfoRequest,
  changeNameRequest,
} from './actions';


const HANDLERS = {
  * [getInfoRequest]() {
    const username = yield select(state => state.home.username);
    try {
      const { data: repos } = yield call(axios, `https://api.github.com/users/${username}/repos`, {
        method: 'GET',
      });
      const { data: orgs } = yield call(axios, `https://api.github.com/users/${username}/orgs`, {
        method: 'GET',
      });

      yield put({
        type: GET_INFO_SUCCESS,
        payload: { repos, orgs },
      });
    } catch (e) {
      yield put({
        type: ERROR_HANDLER,
        payload: e,
      });
    }
  },
  * [changeNameRequest](action) {
    try {
      yield put({
        type: CHANGE_NAME_SUCCESS,
        payload: action,
      });
    } catch (e) {
      yield put({
        type: ERROR_HANDLER,
        payload: e,
      });
    }
  },
};

export function* sagaWatcher({ type, payload }) {
  const handler = HANDLERS[type];
  if (handler != null) yield handler(payload);
}

export default function* sagaReducerAuth() {
  yield takeEvery('*', sagaWatcher);
}

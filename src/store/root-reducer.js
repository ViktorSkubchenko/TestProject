import { combineReducers } from 'redux';

import home from '../pages/home/reducer';

const reducers = {
  home,
};

const state = combineReducers(reducers);

export default state;

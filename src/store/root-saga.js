import { fork, all } from 'redux-saga/effects';
import homeEffects from '../pages/home/effects';

export default function* () {
  yield all([
    fork(homeEffects),
  ]);
}

export {
  homeEffects,
};

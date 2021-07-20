import { all, fork } from 'redux-saga/effects';
import dogs from './dogs';

const sagas = [dogs];

export default function* rootSaga() {
  yield all(sagas.map((saga) => fork(saga)));
}

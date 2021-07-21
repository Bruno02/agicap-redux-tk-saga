import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchDogsStart, fetchDogsSuccess, fetchDogsError } from 'reducers/dogs';
import { keys } from 'lodash';

export const FETCH_ALL_DOGS_API = 'https://dog.ceo/api/breeds/list/all';

interface IDogsMessage {
  message: Record<string, string[]>;
}

function* fetchDogs() {
  try {
    const res = yield call(fetch, FETCH_ALL_DOGS_API);
    const data: IDogsMessage = yield res.json();

    if (data) {
      const dogs: string[] = keys(data.message);
      yield put(fetchDogsSuccess(dogs));
    }
  } catch (error) {
    yield put(fetchDogsError(error));
  }
}

export default function* sagas() {
  yield takeEvery(fetchDogsStart.type, fetchDogs);
}

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducers from 'app/reducers';
import rootSaga from 'app/sagas';

const IS_DEV = true;

const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

if (IS_DEV) {
  middleware.push(logger);
}

const store = configureStore({
  reducer: reducers,
  middleware,
  devTools: IS_DEV,
});

sagaMiddleware.run(rootSaga);

export default store;
export type RootState = ReturnType<typeof store.getState>;

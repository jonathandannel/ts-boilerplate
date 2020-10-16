import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga';
import appSliceReducer from '../../Ducks/ducksApp';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  // Auto combines into a single root reducer
  reducer: {
    app: appSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== 'development' ? false : true,
});

sagaMiddleware.run(rootSaga);

export default store;

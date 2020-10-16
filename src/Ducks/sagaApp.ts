import { put, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { setLoading } from './ducksApp';

const delay = (): Promise<void> => new Promise((res) => setTimeout(res, 700));

function* loadingTest({ payload }: PayloadAction<boolean>): Generator<any> {
  if (payload) {
    yield delay();
    yield console.log('Loading...');
    yield delay();
    yield console.log('Loading...');
    yield delay();
    yield put(setLoading(false));
    yield console.log('App loaded.');
  }
}

export function* sagaAppLoad(): Generator<any> {
  yield takeEvery(setLoading, loadingTest);
}

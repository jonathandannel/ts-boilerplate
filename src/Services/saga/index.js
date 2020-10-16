import { all } from 'redux-saga/effects';
import { sagaAppLoad } from '../../Ducks/sagaApp';

export default function* rootSaga() {
  yield all([sagaAppLoad()]);
}

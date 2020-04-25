import { all } from 'redux-saga/effects';

import car from './car/sagas';
import motorbike from './motorbike/sagas';

export default function* rootSaga() {
  return yield all([car, motorbike]);
}

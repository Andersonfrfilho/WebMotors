import { combineReducers } from 'redux';

import car from './car/reducer';
import motorbike from './motorbike/reducer';
import commons from './common/reducer';

export default combineReducers({
  car,
  motorbike,
  commons,
});

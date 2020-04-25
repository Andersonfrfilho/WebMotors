import { all, call, put, takeLatest, cancel, delay } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { history } from '../../../services/history';
import {
  loading,
  successAction,
  failureAction,
  breakAction,
} from '../common/actions';
import {
  defineMarks,
  defineModels,
  defineVersions,
  defineCars,
  defineYears,
  definePrices,
} from './actions';
// import { defineInformationUser } from '../contacts/actions';
import { errorVerify, NewException } from '../../../utils';

function* requestMarks() {
  yield put(loading(''));
  try {
    const newOptions = [{ value: 0, label: 'Todas' }];
    const { data } = yield call(api.get, `/Make`);
    data.forEach(element => {
      newOptions.push({
        value: element.ID,
        label: element.Name,
      });
    });
    let cars = [];
    let page = 1;
    let { data: dataCars } = yield call(api.get, `/Vehicles?Page=${page}`);
    cars = [...cars, ...dataCars];
    while (dataCars.length !== 0) {
      page += 1;
      const { data: dataCarsAux } = yield call(
        api.get,
        `/Vehicles?Page=${page}`
      );
      dataCars = dataCarsAux;
      cars = [...cars, ...dataCars];
    }
    const years = cars.map(car => car.YearModel);
    const prices = cars.map(car => car.Price);
    const uniqueYears = [...new Set(years)];
    const uniquePrices = [...new Set(prices)];
    const newYears = [
      {
        label: 'todos',
        value: 0,
      },
    ];
    uniqueYears.forEach((year, index) => {
      newYears.push({
        label: year,
        value: index + 1,
      });
    });
    const newPrices = [
      {
        label: 'todos',
        value: 0,
      },
    ];
    uniquePrices.forEach((price, index) => {
      newPrices.push({
        label: price,
        value: index + 1,
      });
    });

    yield put(defineYears(newYears));
    yield put(definePrices(newPrices));
    yield put(defineCars(cars));
    yield put(defineMarks(newOptions));
    yield put(successAction(''));
  } catch (error) {
    const message = errorVerify(error);
    toast.error(message);
    yield put(failureAction(message));
  }
}

function* requestModels({ payload: { mark } }) {
  yield put(loading(''));
  try {
    const newOptions = [{ value: 0, label: 'Todas' }];
    if (mark.value !== 0) {
      const { data } = yield call(api.get, `/Model?MakeID=${mark.value}`);
      data.forEach(element => {
        newOptions.push({
          value: element.ID,
          label: element.Name,
        });
      });
    }
    yield put(defineModels(newOptions));
    yield put(successAction(''));
  } catch (error) {
    const message = errorVerify(error);
    toast.error(message);
    yield put(failureAction(message));
  }
}
function* requestVersions({ payload: { model } }) {
  yield put(loading(''));
  try {
    const newOptions = [{ value: 0, label: 'Todas' }];
    if (model.value !== 0) {
      const { data } = yield call(api.get, `/Version?ModelID=${model.value}`);
      data.forEach(element => {
        newOptions.push({
          value: element.ID,
          label: element.Name,
        });
      });
    }
    yield put(defineVersions(newOptions));
    yield put(successAction(''));
  } catch (error) {
    const message = errorVerify(error);
    toast.error(message);
    yield put(failureAction(message));
  }
}
export default all([
  takeLatest('@cars/REQUEST_MARKS', requestMarks),
  takeLatest('@cars/REQUEST_MODELS', requestModels),
  takeLatest('@cars/REQUEST_VERSIONS', requestVersions),
]);

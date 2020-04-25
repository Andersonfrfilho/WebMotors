export function requestMarks() {
  return {
    type: '@cars/REQUEST_MARKS',
  };
}
export function defineMarks(marks) {
  return {
    type: '@cars/DEFINE_MARKS',
    payload: {
      marks,
    },
  };
}
export function requestModels(mark) {
  return {
    type: '@cars/REQUEST_MODELS',
    payload: {
      mark,
    },
  };
}
export function defineModels(models) {
  return {
    type: '@cars/DEFINE_MODELS',
    payload: {
      models,
    },
  };
}
export function requestVersions(model) {
  return {
    type: '@cars/REQUEST_VERSIONS',
    payload: {
      model,
    },
  };
}
export function defineVersions(versions) {
  return {
    type: '@cars/DEFINE_VERSIONS',
    payload: {
      versions,
    },
  };
}
export function defineCars(cars) {
  return {
    type: '@cars/DEFINE_CARS',
    payload: {
      cars,
    },
  };
}
export function defineYears(years) {
  return {
    type: '@cars/DEFINE_YEARS',
    payload: {
      years,
    },
  };
}
export function definePrices(prices) {
  return {
    type: '@cars/DEFINE_PRICES',
    payload: {
      prices,
    },
  };
}

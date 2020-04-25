import produce from 'immer';

const INITIAL_STATE = {
  email: '',
  marks: [{ value: 0, label: 'Todas' }],
  models: [{ value: 0, label: 'Todas' }],
  versions: [{ value: 0, label: 'Todas' }],
  cars: [{ value: 0, label: 'Todas' }],
  years: [{ value: 0, label: 'Todas' }],
  prices: [{ value: 0, label: 'Todas' }],
};

export default function car(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@cars/DEFINE_MARKS':
      return produce(state, draft => {
        draft.marks = action.payload.marks;
      });
    case '@cars/DEFINE_MODELS':
      return produce(state, draft => {
        draft.models = action.payload.models;
      });
    case '@cars/DEFINE_VERSIONS':
      return produce(state, draft => {
        draft.versions = action.payload.versions;
      });
    case '@cars/DEFINE_CARS':
      return produce(state, draft => {
        draft.cars = action.payload.cars;
      });
    case '@cars/DEFINE_YEARS':
      return produce(state, draft => {
        draft.years = action.payload.years;
      });
    case '@cars/DEFINE_PRICES':
      return produce(state, draft => {
        draft.prices = action.payload.prices;
      });
    default:
      return state;
  }
}

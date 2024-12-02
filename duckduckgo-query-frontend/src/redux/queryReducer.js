import { SET_QUERY, SET_RESULTS, SET_ERROR } from './queryActions';

const initialState = {
  query: '',
  results: null,
  error: null,
};

const queryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUERY:
      return { ...state, query: action.payload, error: null };
    case SET_RESULTS:
      return { ...state, results: action.payload, error: null };
    case SET_ERROR:
      return { ...state, error: action.payload, results: null };
    default:
      return state;
  }
};

export default queryReducer;


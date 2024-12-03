import { SET_QUERY, SET_RESULTS, SET_ERROR, SET_HISTORY } from './queryActions';

const initialState = {
  query: '',
  results: null,
  error: null,
  history: [], // Initialize history as an empty array
};

export default function queryReducer(state = initialState, action) {
  switch (action.type) {
    case SET_QUERY:
      return { ...state, query: action.payload };
    case SET_RESULTS:
      return { ...state, results: action.payload, error: null };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case SET_HISTORY:
      return { ...state, history: action.payload }; // Update history
    default:
      return state;
  }
}


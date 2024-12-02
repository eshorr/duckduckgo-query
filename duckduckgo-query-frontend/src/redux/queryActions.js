import axios from 'axios';

// Action Types
export const SET_QUERY = 'SET_QUERY';
export const SET_RESULTS = 'SET_RESULTS';
export const SET_ERROR = 'SET_ERROR';

// Action Creators
export const setQuery = (query) => ({ type: SET_QUERY, payload: query });
export const setResults = (results) => ({ type: SET_RESULTS, payload: results });
export const setError = (error) => ({ type: SET_ERROR, payload: error });

// Async Action to Query DuckDuckGo
export const fetchResults = (query) => async (dispatch) => {
  try {
    dispatch(setResults(null)); // Clear previous results
/*    const response = await axios.get('https://api.duckduckgo.com/', {
      params: {
        q: query,
        format: 'json',
        no_redirect: 1,
        no_html: 1,
      },
    });
*/
    const response = await axios.get('http://localhost:5001/api/search', {
      params: { query },
    });
    const data = response.data;

    if (data.AbstractText || data.RelatedTopics.length > 0) {
      dispatch(setResults(data));
    } else {
      dispatch(setError('No results found.'));
    }
  } catch (error) {
    dispatch(setError('Failed to fetch results.'));
  }
};


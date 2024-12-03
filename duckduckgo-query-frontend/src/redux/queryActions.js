import axios from 'axios';
import Cookies from 'js-cookie';

export const SET_QUERY = 'SET_QUERY';
export const SET_RESULTS = 'SET_RESULTS';
export const SET_ERROR = 'SET_ERROR';
export const SET_HISTORY = 'SET_HISTORY';

export const setQuery = (query) => ({ type: SET_QUERY, payload: query });
export const setResults = (results) => ({ type: SET_RESULTS, payload: results });
export const setError = (error) => ({ type: SET_ERROR, payload: error });
export const setHistory = (history) => ({ type: SET_HISTORY, payload: history });

export const fetchResults = (query) => async (dispatch) => {
  try {
    dispatch(setResults(null)); // Clear previous results

    // Get the current query history from cookies
    const history = JSON.parse(Cookies.get('queryHistory') || '[]');

    // Add the new query to history if it's not already present
    if (!history.includes(query)) {
      const updatedHistory = [query, ...history].slice(0, 10); // Keep the latest 10 queries
      Cookies.set('queryHistory', JSON.stringify(updatedHistory), { expires: 1 });
      dispatch(setHistory(updatedHistory)); // Update Redux state
    }

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
    console.error(error);
    dispatch(setError('Failed to fetch results.'));
  }
};

// Load query history from cookies
export const loadQueryHistory = () => (dispatch) => {
  const history = JSON.parse(Cookies.get('queryHistory') || '[]');
  dispatch(setHistory(history));
};


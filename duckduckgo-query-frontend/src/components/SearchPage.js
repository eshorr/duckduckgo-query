import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setQuery, fetchResults } from '../redux/queryActions';

function SearchPage() {
  const dispatch = useDispatch();
  const { query, results, error } = useSelector((state) => state.query);

  const handleInputChange = (e) => {
    dispatch(setQuery(e.target.value));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchResults(query));
  };

  return (
    <div style={{ fontFamily: 'Arial', margin: '20px' }}>
      <h1>DuckDuckGo Query</h1>
      <form onSubmit={handleSearch}>
        <label>
          Enter your search query:
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            required
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </label>
        <button type="submit" style={{ marginLeft: '10px', padding: '5px' }}>
          Search
        </button>
      </form>

      <div style={{ marginTop: '20px' }}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {results && (
          <div>
            {results.AbstractText ? (
              <p>{results.AbstractText}</p>
            ) : (
              <ul>
                {results.RelatedTopics.map((topic, index) =>
                  topic.Text ? (
                    <li key={index}>
                      <a href={topic.FirstURL} target="_blank" rel="noopener noreferrer">
                        {topic.Text}
                      </a>
                    </li>
                  ) : null
                )}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchPage;


import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setQuery, fetchResults, loadQueryHistory } from '../redux/queryActions';

function SearchPage() {
  const dispatch = useDispatch();
  const { query, results, error, history } = useSelector((state) => state.query);

  useEffect(() => {
    // Load query history from cookies when the component mounts
    dispatch(loadQueryHistory());
  }, [dispatch]);

  const handleInputChange = (e) => {
    dispatch(setQuery(e.target.value));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchResults(query));
  };

  const handleQueryClick = (selectedQuery) => {
    dispatch(setQuery(selectedQuery));
    dispatch(fetchResults(selectedQuery));
  };

  return (
    <div style={{ display: 'flex', fontFamily: 'Arial', margin: '20px' }}>
      {/* Sidebar */}
      <div style={{ width: '200px', marginRight: '20px' }}>
        <h3>Query History</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {history.map((q, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>
              <a
                href="#"
                onClick={() => handleQueryClick(q)}
                style={{ textDecoration: 'none', color: 'blue', cursor: 'pointer' }}
              >
                {q}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div>
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
    </div>
  );
}

export default SearchPage;


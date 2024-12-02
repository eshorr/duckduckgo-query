import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <Provider store={store}>
      <SearchPage />
    </Provider>
  );
}

export default App;


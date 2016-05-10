import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/searchBar.js'

const API_KEY = 'AIzaSyAQKuJeZuMWkn1qYVWM6CbIPgtYQE0xAmQ';

const App = () => {
  return (
    <div>
      <Search />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
);

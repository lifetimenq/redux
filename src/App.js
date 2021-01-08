import React from 'react';
import store from './Redux/store';
import './App.css';
import { Provider } from 'react-redux'

import ChapterList from './Components/ChapterList';
import Filter from './Components/Filter';
import Statistics from './Components/Statistics';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div>
          Book's contents
        </div>
        <Filter />
        <ChapterList />
        <Statistics />
      </div>
    </Provider>
  );
}

export default App;


import React from 'react';
import store from './Redux/store';
import './App.css';
import { Provider } from 'react-redux'

import ChapterList from './Components/ChapterList/';
import Filter from './Components/Filter';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div>
          Book's contents
        </div>
        <Filter />
        <ChapterList />
      </div>
    </Provider>
  );
}

export default App;


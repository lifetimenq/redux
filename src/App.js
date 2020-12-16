import React from 'react';
import store from './Redux/store';
import './App.css';
import { Provider } from 'react-redux'

import ChapterList from './Components/ChapterList/';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div>
          Book's contents
        </div>
        <ChapterList />
      </div>
    </Provider>
  );
}

export default App;


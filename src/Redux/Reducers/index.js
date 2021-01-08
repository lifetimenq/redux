import { combineReducers } from 'redux';

import { filters } from './filters';
import { content } from './chapter'; 

export default combineReducers(
  {
    content,
    filters
  }
);
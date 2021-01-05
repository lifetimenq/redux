import { combineReducers } from 'redux';

import { subChapters } from './subChapter';
import { filters } from './filters';
import { content } from './chapter'; 

export default combineReducers(
  {
    content,
    filters
  }
);
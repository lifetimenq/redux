import { combineReducers } from 'redux';

import { bookContents } from './chapter';
import { filters } from './filters'

export default combineReducers(
  {
    bookContents,
    filters
  }
);
import { connect } from 'react-redux';

import SubChapterList from './SubChapterList';

const filters = {
  SHOW_ALL: () => true,
  SHOW_COMPLETED: (item) => item.completed,
  SHOW_UNCOMPLETED: (item) => !item.completed
};


const mapStateToProps = (state) => {
  return state.content; 
};

const mapDispatchToProps = (dispatch) => ({
  addSubchapter: (chapterId, title) => dispatch({
    type: 'ADD_SUBCHAPTER',
    title,
    chapterId
  }),
  toggleSubChapter: (idx, chapterId) => dispatch({
    type: 'TOGGLE_SUBCHAPTER',
    idx,
    chapterId
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(SubChapterList);
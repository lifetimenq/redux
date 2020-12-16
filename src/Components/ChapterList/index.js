import { connect } from 'react-redux';

import ChapterList from './ChapterList';

const mapStateToProps = (state) => (
  {
    bookContents: state.bookContents
  }
);

const mapDispatchToProps = (dispatch) => ({
  toggleChapter: (idx) => dispatch({
    type: 'TOGGLE_CHAPTER',
    idx
  }),
  toggleSubchapter: (idx, chapterId) => dispatch({
    type: 'TOGGLE_SUBCHAPTER',
    idx,
    chapterId
  }),
  addChapter: (title) => dispatch({
    type: 'ADD_CHAPTER',
    title
  }),
  addSubchapter: (chapterId, title) => dispatch({
    type: 'ADD_SUBCHAPTER',
    title,
    chapterId
  })
  
});

export default connect(mapStateToProps, mapDispatchToProps)(ChapterList);
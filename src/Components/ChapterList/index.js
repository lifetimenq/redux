import { connect } from 'react-redux';

import ChapterList from './ChapterList';

const filters = {
  SHOW_ALL: () => true,
  SHOW_COMPLETED: (item) => item.completed,
  SHOW_UNCOMPLETED: (item) => !item.completed
};


const mapStateToProps = (state) => {
  const test = {
    bookContents: state.bookContents.map(
      (chapter) => {
          chapter.subChapter = chapter.subChapter.filter(
            filters[state.filters]
          )
        return chapter;
      }
    ).filter(
      filters[state.filters]
    )
  }

  return test; 
};

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
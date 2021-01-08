import { connect } from 'react-redux';

import ChapterList from './ChapterList';

const filters = {
  SHOW_ALL: () => true,
  SHOW_COMPLETED: (chapter) => chapter.completed,
  SHOW_UNCOMPLETED: (chapter) => !chapter.completed
};


const mapStateToProps = (state) => {
  return {
    ...state,
    content: {
      chapters: state.content.chapters,
      subChapters: state.content.subChapters.filter(filters[state.filters])
    }
  };
};

const mapDispatchToProps = (dispatch) => ({
  addChapter: (title, id) => dispatch({
    type: 'ADD_CHAPTER',
    id,
    title
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(ChapterList);
const initialState = [
  {
    chapterId: 0,
    title: 'подглава 1',
    completed: false,
    
  },
  {
    chapterId: 0,
    title: 'подглава 2',
    completed: false
  },
  {
    chapterId: 1,
    title: 'интересная подглава 2',
    completed: false
  },
  {
    chapterId: 2,
    title: 'подглава 1',
    completed: true,
  }
];

export const subChapters = function(state = initialState, action) {
  switch(action.type) {
    case 'ADD_SUBCHAPTER':
      return state.concat(
        {
          chapterId: action.chapterId,
          title: action.title,
          completed: false
        }
      );
    case 'TOGGLE_SUBCHAPTER':
      return state.map(
        (subChapter, idx) => (
          idx === action.idx
            ? { ...subChapter, completed: !subChapter.completed }
            : subChapter
        )
      )
    default:
      return state;
  }
}
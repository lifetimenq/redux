const initialState = {
  chapters: [
    {
      title: 'Глава 1',
      completed: false
    },
    {
      title: 'Глава 2',
      completed: false
    },
    {
      title: 'Глава 3',
      completed: true
    }
  ],
  subChapters: [
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
  ]
};

function updateChapter(state, prevState, action) {

  let chapterComplete = state.subChapters
  .filter((element) => (element.chapterId === action.chapterId))
  .every((subChapter) => (subChapter.completed));

  if (chapterComplete) {
    return {...state, chapters: prevState.chapters.map(
        (chapter, idx) => (
          idx === action.chapterId
            ? { ...chapter, completed: true }
            : chapter
        )
      )
    };
  } else {
    return {...state, chapters: prevState.chapters.map(
        (chapter, idx) => (
          idx === action.chapterId
            ? { ...chapter, completed: false }
            : chapter
        )
      )
    };
  }

}

export const content = function(state = initialState, action) {
  switch(action.type) {
    case 'ADD_CHAPTER':
      return {...state, chapters: state.chapters.concat(
          {
            title: action.title, 
            completed: false
          }
        )
      };
    case 'ADD_SUBCHAPTER':
      const new_state = {...state, subChapters: state.subChapters.concat(
          {
            chapterId: action.chapterId,
            title: action.title,
            completed: false
          }
        )
      };

      return updateChapter(new_state, state, action);

    case 'TOGGLE_SUBCHAPTER':
      const toggle_state = {...state, subChapters: state.subChapters.map(
          (subChapter, idx) => (
            idx === action.idx
              ? { ...subChapter, completed: !subChapter.completed }
              : subChapter
          )
        )
      };

      return updateChapter(toggle_state, state, action);
    default:
      return state;
  }
}
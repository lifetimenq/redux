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
      return {...state, subChapters: state.subChapters.concat(
          {
            chapterId: action.chapterId,
            title: action.title,
            completed: false
          }
        )
      };
    case 'TOGGLE_SUBCHAPTER':
      let temp_state = {...state, subChapters: state.subChapters.map(
          (subChapter, idx) => (
            idx === action.idx
              ? { ...subChapter, completed: !subChapter.completed }
              : subChapter
          )
        )
      };

      let chapterComplete = temp_state.subChapters
      .filter((element) => (element.chapterId === action.chapterId))
      .every((subChapter) => (subChapter.completed));

      if (chapterComplete) {
        temp_state = {...temp_state, chapters: state.chapters.map(
            (chapter, idx) => (
              idx === action.chapterId
                ? { ...chapter, completed: true }
                : chapter
            )
          )
        };
      } else {
        temp_state = {...temp_state, chapters: state.chapters.map(
            (chapter, idx) => (
              idx === action.chapterId
                ? { ...chapter, completed: false }
                : chapter
            )
          )
        };
      }

      return temp_state;
    default:
      return state;
  }
}
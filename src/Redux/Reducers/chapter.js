const initialState = [
  {
    id: 1,
    title: 'Глава первая',
    completed: false,
    subChapter: [
      {
        title: 'подглава 1',
        completed: true
      },
      {
        title: 'подглава 2',
        completed: false
      }
    ]
  },
  {
    id: 2,
    title: 'Глава вторая',
    completed: false,
    subChapter: []
  },
  {
    id: 3,
    title: 'Глава третья',
    completed: true,
    subChapter: [
      {
        title: 'подглава 1',
        completed: true
      }
    ]
  }
];

export const bookContents = function(state = initialState, action) {
  switch(action.type) {
    case 'ADD_CHAPTER':
      return state.concat(
        {
          id: Math.floor(Math.random()*1000000),
          title: action.title, 
          completed: false
        }
      );
    case 'ADD_SUBCHAPTER':
      let result;
      let newChapter;
      result = state.map(
        (chapter) => {
          if(chapter.id == action.chapterId) {
            if(chapter.subChapter) {
              newChapter = { 
                ...chapter, 
                subChapter: chapter.subChapter.concat(
                    {
                      title: action.title,
                      completed: false
                    }
                  )
              }
            } else {
              newChapter = { 
                ...chapter, 
                subChapter: [
                  {
                    title: action.title,
                    completed: false
                  }
                ]
              }
            }
          } else {
            newChapter = chapter;
          }
          return newChapter;
        }
      )
      return result;
    case 'TOGGLE_CHAPTER':
      return state.map(
        (chapter, idx) => (
          idx === action.idx
          ? { ...chapter, completed: !chapter.completed }
          : chapter
        )
      );
    case 'TOGGLE_SUBCHAPTER':
      return state.map(
        (chapter) => {
          let sub;
          if (chapter.subChapter) {
            sub = chapter.subChapter.map(
              (subChapter, idx) => (
                idx === action.idx && action.chapterId === chapter.id
                ? subChapter = {...subChapter, completed: !subChapter.completed}
                : subChapter
              )
            );
          }
          return { ...chapter, subChapter: sub };
        }
      );
    default:
      return state;
  }
}
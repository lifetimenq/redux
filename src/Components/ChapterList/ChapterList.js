import React from 'react';


const ChapterList = ( { bookContents, toggleChapter, toggleSubchapter, addChapter, addSubchapter } ) => (
  <div>
    {
      bookContents.map(
        (chapter, idx) =>  (
          <div id={chapter.id} key={chapter.id}>
            <label>
              <input 
                type="checkbox" 
                checked={chapter.completed} 
                onChange={() => toggleChapter(idx)} />
              {chapter.title}
            </label>
            {chapter.subChapter && chapter.subChapter.map(
              (subChapter, idx) => (
                <div>
                  <label key={idx}>
                    <input 
                      type="checkbox" 
                      checked={subChapter.completed}
                      onChange={() => toggleSubchapter(idx, chapter.id)} />
                    {subChapter.title}
                  </label>
                </div>
              )
            )}
            <form
              onSubmit={
                (e) => {
                  e.preventDefault();
                  addSubchapter(e.target.parentElement.id, e.target.title.value);
                  e.target.title.value = '';
                }
              }
            >
              <input type="text" name="title" />
              <button>Добавить раздел</button>
            </form>
          </div>
        )
      )
    }
    <form
      onSubmit={
        (e) => {
          e.preventDefault();
          addChapter(e.target.title.value);
          e.target.title.value = '';
        }
      }
    >
      <input type="text" name="title" />
      <button>Добавить главу</button>
    </form>
  </div>
);

export default ChapterList;
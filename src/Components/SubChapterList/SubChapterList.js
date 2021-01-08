import React from 'react';


const ChapterList = ( { subChapters, chapterIdx, addSubchapter, toggleSubChapter } ) => (
  <div className="todo-list">
    {
      subChapters && subChapters.map( 
        (subChapter, idx) => {
          if (chapterIdx === subChapter.chapterId)
            return (
              <label key={idx}>
                <input 
                  onChange={() => toggleSubChapter(idx, chapterIdx)}
                  type="checkbox"
                  checked={subChapter.completed}
                />
                {subChapter.title}
              </label>
            )
          return false;
        }
      )
    }
    <form
      onSubmit={
        (e) => {
          e.preventDefault();
          if(!e.target.title.value.trim()) {
            return
          }
          addSubchapter(chapterIdx, e.target.title.value);
          e.target.title.value = '';
        }
      }
    >
      <input type="text" name="title" />
      <button>Добавить подраздел</button>
    </form>
  </div>
);

export default ChapterList;
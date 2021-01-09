import React from 'react';


const ChapterList = ( { content, chapterId, addSubchapter, toggleSubChapter } ) => {
  const { subChapters } = content
  return (
  <div className="sub-chapter-list">
    {
      subChapters && subChapters.map( 
        (subChapter) => {
          if (chapterId === subChapter.chapterId)
            return (
              <label key={subChapter.id}>
                <input 
                  onChange={() => toggleSubChapter(subChapter.id, chapterId)}
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
          addSubchapter(chapterId, e.target.title.value);
          e.target.title.value = '';
        }
      }
    >
      <div className="sub-chapter-add">
        <input type="text" name="title" />
        <button>Добавить подраздел</button>
      </div>
    </form>
  </div>
)};

export default ChapterList;
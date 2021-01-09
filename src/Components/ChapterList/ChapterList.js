import React from 'react';
import SubChapterList from '../SubChapterList';


const ChapterList = ( { content, addChapter } ) => {
  const { chapters } = content
  return (
  <div className="todo-list">
    {
      chapters.map(
        (chapter) => (
          <label key={chapter.id}>
            <input type="checkbox" checked={chapter.completed} onChange={()=>(true)} />
            {chapter.title}
            <SubChapterList chapterId={chapter.id} />
          </label>
        )
      )
    }
    <form
      onSubmit={
        (e) => {
          e.preventDefault();
          if(!e.target.title.value.trim()) {
            return
          }

          addChapter(e.target.title.value);
          e.target.title.value = '';
        }
      }
    >
      <input type="text" name="title" />
      <button>Добавить Главу</button>
    </form>
  </div>
)};

export default ChapterList;
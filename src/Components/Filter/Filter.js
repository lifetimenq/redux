import React from 'react';

const Filter = ({ setFilter }) => {
  return (
    <div>
      <button onClick={() => { setFilter('SHOW_ALL') } }>Show all</button>
      <button onClick={() => { setFilter('SHOW_COMPLETED') } }>Show completed</button>
      <button onClick={() => { setFilter('SHOW_UNCOMPLETED') } }>Show uncompleted</button>
    </div>
  )
}

export default Filter;
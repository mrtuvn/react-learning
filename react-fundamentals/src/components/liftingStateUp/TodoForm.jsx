import React from 'react'

function TodoForm({ addTitle }) {
  const [title, setTitle] = React.useState('');

  return (
    <div>
      Title: <input type="text" onChange={e => setTitle(e.target.value)} />
      <button type="button" onClick={() => addTitle(title)}>Add</button>
    </div>
  )
}

export default TodoForm
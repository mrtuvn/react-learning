import React from 'react'

function TodoButton({ id, deleteTodo }) {
  return (
    <button type="button" onClick={() => deleteTodo(id)}>delete</button>
  )
}

export default TodoButton
import React from 'react'
import TodoButton from './TodoButton'

function TodoItem({ id, title, deleteTodo }) {
  return (
    <li>
      Title: {title} <TodoButton id={id} deleteTodo={deleteTodo} />
    </li>
  )
}

export default TodoItem
import React from 'react'

function TodoCount({ todos }) {
  return (
    <div>
      Total: {todos.length}
    </div>
  )
}

export default TodoCount
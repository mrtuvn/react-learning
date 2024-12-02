import React from 'react'
import TodoItem from './TodoItem'

function TodoList({ todos, deleteTodo }) {
  return (
    <div>
      <ul>
        {todos.map(todo => {
          return (
            <TodoItem 
              key={todo.id} 
              id={todo.id} 
              title={todo.title} 
              deleteTodo={deleteTodo} 
            />
          )
        })}
      </ul>
    </div>
  )
}

export default TodoList
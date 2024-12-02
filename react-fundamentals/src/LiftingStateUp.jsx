import React from 'react'
import TodoForm from './components/liftingStateUp/TodoForm'
import TodoList from './components/liftingStateUp/TodoList'
import TodoCount from './components/liftingStateUp/TodoCount'

function LiftingStateUp() {
  const [todos, setTodos] = React.useState([]);

  function addTitle(title) {
    const item = {
      id: Date.now(),
      title
    }
    setTodos(prevState => {
      return [...prevState, item]
    })
  }

  function deleteTodo(id) {
    const newTodos = [...todos]
    const index = newTodos.findIndex(item => item.id === id)
    newTodos.splice(index, 1);
    setTodos(newTodos)
  }

  return (
    <div>
      <h1>LiftingStateUp</h1>
      <TodoForm addTitle={addTitle}  /> <br />

      <TodoCount todos={todos} /> <br />

      <TodoList todos={todos} deleteTodo={deleteTodo} /> <br />
    </div>
  )
}

export default LiftingStateUp
import React from 'react'
import Button from './components/Button';

/*
useEffect
- run once time when empty dependency
- every run when cpns re-render if dependency value change
- run in first render

cleanup useEffect
- don't run first render
- run in next render (cps re-render)
- run after cps unmount
*/

function EffectHook() {
  const [timestamp, setTimestamp] = React.useState(Date.now());
  const [todos, setTodos] = React.useState(null);
  const [limit, setLimit] = React.useState(5);

  React.useEffect(() => {
    console.log('useEffect with no dependency')
    // call api -> update state -> cpn re-render -> useEffect -> call api -> loop?
    return () => {
      console.log('cleanup useEffect with no dependency')
    }
  })

  React.useEffect(() => {
    console.log('useEffect with empty dependency')
    return () => {
      console.log('cleanup useEffect with empty dependency')
    }
  }, []); // run once time

  React.useEffect(() => {
    console.log('useEffect with dependency')
    return () => {
      console.log('cleanup useEffect with dependency')
    }
  }, [timestamp])
  
  React.useLayoutEffect(() => {
    console.log('useLayoutEffect with no dependency')
    // call api -> update state -> cpn re-render -> useEffect -> call api -> loop?
    return () => {
      console.log('cleanup useLayoutEffect with no dependency')
    }
  })

  React.useLayoutEffect(() => {
    console.log('useLayoutEffect with empty dependency')
    return () => {
      console.log('cleanup useLayoutEffect with empty dependency')
    }
  }, []); // run once time

  React.useLayoutEffect(() => {
    console.log('useLayoutEffect with dependency')
    return () => {
      console.log('cleanup useLayoutEffect with dependency')
    }
  }, [timestamp])

  // React.useEffect(() => {
  //   async function fetchTodos() {
  //     const res = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=1`);
  //     const data = await res.json();
  //     setTodos(data);
  //   }
  //   fetchTodos();
  // }, [limit])

  console.log('----------------------')
  console.log('EffectHook re-render')

  return (
    <div>
      <h1>EffectHook</h1>
      Timestamp: {timestamp} <br />
      <Button text="Update timestap" onClick={() => setTimestamp(Date.now())}/>

      <div>List Todos</div>
      {Array.isArray(todos) && todos.length > 0 && (
        <>
          {todos.map(todo => {
            return (
              <div>
                Title: {todo.title}
              </div>
            )
          })}
        </>
      )}
      <div>
        Limit: <select value={limit} onChange={e => setLimit(e.target.value)}>
          <option value={1}>1</option>
          <option value={3}>3</option>
          <option value={5}>5</option>
        </select>
      </div>
      <br /><br />

    </div>
  )
}

export default EffectHook
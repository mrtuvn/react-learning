import React from 'react'

function ReactJSX() {
  const sum = 20 + 30; // value

  const item = (
    <div>
      this is jsx
    </div>
  )

  const renderUser = () => {
    return (
      <div>this is user</div>
    )
  }

  return (
    <>
      <h1>ReactJSX</h1>
      Sum: {sum} <br />
      JSX: {item} <br />
      User: {renderUser()} <br />
      Closed implement: <input type="text" />
      <div />
      <br />
    </>
  )
}

export default ReactJSX
import React, { useState } from 'react';
import Button from './components/Button';

/*
first render
next render (re-render) -> update state

immutate -> bất biến -> ko dc thay đổi giá trị default
let sum = 10

function sumDuc() {
  sum = sum + 20
  return sum;
}

// pure function -> nhận vào input, va trả ra output (ko có side effect)
function sumTu(number) {
  return sum + number
}
*/
function State() {
  const [count, setCount] = useState(1); // tham trị
  const [user, setUser] = useState({
    name: 'tony',
    age: 20
  }); // tham chiếu memory A

  function handleUpdateCount() {
    // setCount(1);
    // setCount((prevState) => {
    //   return prevState + 1
    // })
    setCount(prevState => (prevState + 1))
  }

  function handleUpdateName() {
    // user.name = 'duc'; // don't work because same reference

    // fix: work because create a new reference
    // replace object
    // const newUser = {
    //   ...user, // copy all properties
    //   name: `Duc`
    // }
    // setUser(newUser); // memory B

    // cach viet 2: callback function (js), updater function (react)
    // syntax code: arrow function () => {}
    // setUser((prevState) => {
    //   return {
    //     ...prevState,
    //     name: `Duc` + Date.now()
    //   }
    // })
    setUser((prevState) => ({
      ...prevState,
      name: `Duc` + Date.now()
    }))
  }

  console.log('-----------')
  console.log('State render', user)
  return (
    <div>
      <h1>State</h1> <br />
      Count: {count} <br />
      Name User: {user.name} <br />
      Age User: {user.age} <br />
      <Button 
        text="Update Count"
        onClick={handleUpdateCount}
      />
      <Button 
        text="Update Name User"
        onClick={handleUpdateName}
      />
    </div>
  )
}

export default State
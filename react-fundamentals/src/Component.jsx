import React from 'react'
import Button from './components/Button';


/*
pure/stateles/presentation component

Stateful/Container component
 - Contains logic code in component.
 - Dependent on state for rendering, 
  such as fetching data.

How many ways to component  re-render?
- State changes
- Props changes
- Parent component re-render
- Key changes (force component update)
    - using it when you use the 3rd libraries that it doesn’t implement the shouldComponentUpdate cycle.
    - Ex: https://github.com/nhattruongniit/react-idm-chart-carbon.


function javascript

function sum(a) { return a + 10 }

sum(10); 20

sum(10)(20)(30) = 30; // curry function
const sum = a => b => c => {
  return a + b;  
}

*/

function Welcome({ name }) {
  console.log('Welcome to: ', name)
  return (
    <div>
      Welcome to: {name}
    </div>
  )
}

function Component() {
  const [name, setName] = React.useState('default');
  const [timestamp, setTimestamp] = React.useState(Date.now());

  // () => {}; handleGotoDetail() => excule code logic
  function handleGotoDetail(id) {
    console.log('handleGotoDetail: ', id)
  }

  // curry function
  // click => handleGotoDetail()  => excule code logic
  function handleGotoDetail(id) {
    return () => {
      console.log('handleGotoDetail: ', id);
    };
  }

  return (
    <div>
      <h1>Component</h1>
      <Welcome key={timestamp} /> <br />
      <Welcome name={name} /> <br />
      <br />

      <Button 
        text="Update name"
        onClick={() => {
          setName("Duc" + Date.now());
          setTimestamp(Date.now());
        }}
      />
      <Button 
        text="View Detail"
        // onClick={() => handleGotoDetail(1)}
        onClick={handleGotoDetail(1)}
      />
    </div>
  )
}

export default Component
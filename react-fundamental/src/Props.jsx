import React from 'react';
import PropTypes from 'prop-types';
import Button from './components/Button';

/*
const obj = { name: 'tony', age: 18 }

- object destructuring
const { name, age } = object

- default value

- rest operator
- lấy những thằng còn lại
const { name, ...rest } = obj

- spread operator: truyền tất cả property

- rename properties object

chú y khi nội suy react component vào trong jsx
- phải có thẻ đóng mở như html tag
- phải viết theo Uppercase  
*/

function User({ 
  firstName, 
  age, 
  isDuty, 
  total = 0, // default value
  component,
  component2: Component2, // rename properties
  children, 
  ...restProps // rest operator
}) {
  console.log("props: ", {
    restProps: restProps
  });
  // react element

  return (
    <div>
      User <br /> Total: {total} <br />
      <div>
        {children}
      </div>
      <div>
        This is pass react component: {component}<br />
        This is pass react element: {<Component2 />}
      </div>
    </div>
  )
}

User.propTypes = {
  firstName: PropTypes.string,
  age: PropTypes.number.isRequired,
  isDuty: PropTypes.bool,
  handleAddTodo: PropTypes.func
}

function Props() {
  const personal = {
    email: 'tony@gmail.com',
    name: 'tony',
    lastName: 'nguyen'
  }

  return (
    <div>
      <h1>Props</h1>

      <User 
        firstName="tony" // string
        // isDuty={false} // boolean
        isDuty // boolean
        age={18} // number
        colors={['blue', 'green']} // array
        information={{
          address: 'phu nhuan',
          city: {
            name: 'tphcm'
          }
        }} // object
        handleAddTodo={() => {}} // function
        component={<Button text="react component"/>} // react component
        component2={Button} // react element
        {...personal}
      >
          this is children
          <Button />
      </User>

      <User
        component2={React.Fragment}
      >
        this is form
      </User>
    </div>
  )
}

export default Props
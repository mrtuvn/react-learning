import React from 'react'


/*
Uncontrolled inputs are like traditional HTML form inputs:
They remember what you typed. You can then get their value using a ref.
Don’t cause re-render component.
The input value is not being managed by React.
We are using DOM manipulation to access and manipulate the value of the input element.

work form: react hook form, final form, rc-form
*/


function Form() {
  const firstNameRef = React.useRef(null);
  const [form, setForm] = React.useState({
    lastName: '',
    age: ''
  });

  function onSubmit(e) {
    e.preventDefault();

    console.log('onSubmit:', {
      firstName: firstNameRef.current.value,
      lastName
    })
  }

  function onChange(e) {
    const { name, value } = e.target;
    const newForm = {
      ...form,
      [name]: value
    }
    setForm(newForm)
  }

  console.log('form', form)

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>Form</h1>

        First Name: <input type="text" defaultValue="tony" ref={firstNameRef} /> <br />
        Last Name: <input type="text" name="lastName" value={form.lastName} onChange={onChange} />
        <br />
        <button type="submit">Submit</button>
      </form>
    
    </div>
  )
}

export default Form
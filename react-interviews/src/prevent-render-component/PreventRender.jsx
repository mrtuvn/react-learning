import React, { useState, useCallback } from "react";

// components
import Title from "./components/Title";
import Count from "./components/Count";
import Button from "./components/Button";

export default function PreventRender() {
  console.log("parent rendering");
  const [age, setAge] = useState(1);
  const [salary, setSalary] = useState(1000);

  // Before
  // const incrementAge = () => {
  //   setAge(age + 1);
  // };

  // After improvement
  const incrementAge = useCallback(() => {
    setAge((prevAge) => prevAge + 1);
  }, []);

  const incrementSalary = useCallback(() => {
    setSalary((prevSalary) => prevSalary + 1000);
  }, []);

  return (
    <div className="App">
      <Title />
      <Count text="Age" count={age} />
      <Button onClick={incrementAge}>Increment Age</Button>
      <br /> <br />
      <Count text="Salary" count={salary} />
      <Button onClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
}

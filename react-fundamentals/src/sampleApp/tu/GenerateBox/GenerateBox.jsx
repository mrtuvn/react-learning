import React from 'react'

// components
import Button from '../../../components/Button';
import BoxItem from './BoxItem';

function GenerateBox() {
  // states
  const [number, setNumber] = React.useState(0);
  const [boxs, setBoxs] = React.useState([]);

  // Actions
  function onSubmit() {
    let nums = [];
    for(let i = 0; i < number; i++) {
      nums.push({
        id: i,
        name: i
      })
    }
    setBoxs(nums);
  }

  console.log('boxs: ', boxs)

  // UI
  return (
    <div>
      <h1>GenerateBox</h1>
      <div>
        Number: <input type="number" value={number} onChange={e => setNumber(e.target.value)} />
        <Button text="Generate" onClick={onSubmit} />
      </div>
      <div className='generateBox_container'>
        {boxs.map(item => {
          return (
            <BoxItem item={item} />
          )
        })}
      </div>
    </div>
  )
}

export default GenerateBox
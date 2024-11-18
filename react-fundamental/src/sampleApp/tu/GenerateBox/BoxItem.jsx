import React from 'react'

// utils
import { getRandomColor } from '../../../utils/randomColor';

function BoxItem({ item }) {
  const [bgColor, setBgColor] = React.useState('#fff');

  function changeColor() {
    setBgColor(getRandomColor())
  }

  console.log('BoxItem: ', item.id + 1)

  return (
    <div 
      key={item.id} 
      className='generateBox_item'
      style={{ backgroundColor: bgColor }}
      onClick={changeColor}
    >
      Box #{item.name + 1}
    </div>
  )
}

export default BoxItem
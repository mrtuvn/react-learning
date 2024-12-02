import React from 'react'

/*
&&
quan tâm vế trái/phải
- vế trái là true thì lấy value vế phải
- vế trái mà false thì lấy value vế trái

true && 'nguyen' -> ?
'tony' && 'duc' -> ?
false && 'tu' -> ?
'javascript' && 'react' && 'course' -> ?

========
||
nó sẽ lấy vế true đầu tiên mà nó gặp
'tony' || 'duc' -> ?
false || 'javascript' -> ?
true || 'react' -> ?
'' || 'tony' || 'react' -> ?
'' || false || 'duc' -> ?

?? 
*/

function ConditionalRendering() {
  const [number, setNumber] = React.useState(1);
  // tenary operator: ? :
  let nameMontly = 'April';
  // if(number === 1) {
  //   nameMontly = 'Jan'
  // } else if (number === 2) {
  //   nameMontly = 'Feb'
  // } else if (number === 3) {
  //   nameMontly = 'March'
  // }
  switch(number) {
    case 1:
      nameMontly = 'Jan'
      break;
    case 2: 
      nameMontly = 'Feb';
      break;
    case 3:
      nameMontly = 'March'
      break;
    default:
      break
  }

  return (
    <div>
      <h1>ConditionalRendering</h1>

      {/* {0 ?? 'tony'} <br /> */}
      Name monthly: {nameMontly}
      {/* {number === 1 
        ? 'Jan' 
        : number === 2 
        ? 'Feb' 
        : number === 3 
        ? 'March' 
        : 'April'
      } */}
    </div>
  )
}

export default ConditionalRendering
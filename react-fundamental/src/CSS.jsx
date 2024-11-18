import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';


import { getRandomColor } from './utils/randomColor';

import styles from './card.module.css';

const TitleStyled = styled.section`
  padding: 10px;
  top: ${props => props.top}px
`

function CSS({ isPrimay = true }) {
  const [isStock, setIsStock] = React.useState(false);
  const [randomColor, setRandomColor] = React.useState(getRandomColor())

  const styleDiv = {
    color: getRandomColor(),
    backgroundColor: '#ff0'
  }

  return (
    <div>
      <h1>CSS</h1>

      <TitleStyled top={50}>
        <div style={styleDiv}>this is css</div>
        <div 
          className={clsx(
            "typhography pt-20 pb-20 text-small",
            isStock && styles.body1,
            isPrimay && 'text-primary'
          )}
        >
            this is module css</div>

        <br />
        <button type="button" onClick={() => setIsStock(prevState => !prevState)}>Update stock</button>
      </TitleStyled>

      
    </div>
  )
}

export default CSS;
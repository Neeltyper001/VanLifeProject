import React from 'react'
import './index.css';

const hamburger = (props) => {
  return (
    <button onClick={props.eventReg} className='hamburger-button'>        
            <div></div>
            <div></div>
            <div></div>
    </button>
  )
}

export default hamburger
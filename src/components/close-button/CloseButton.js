import React from 'react';
import './index.css';
import { ToggleMenuContext } from '../../contexts/menuContext';
import { useContext } from 'react';


const CloseButton = () => {
  const toggleMenuContext = useContext(ToggleMenuContext);
  return (
    <button onClick={()=>{toggleMenuContext()}}className='close-button'>
        <div></div>
        <div></div>
    </button>
  )
}

export default CloseButton
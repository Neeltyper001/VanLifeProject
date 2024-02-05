import React from 'react';
import './index.css';
import CloseButton from '../close-button/CloseButton';
import { NavLink } from 'react-router-dom';

const menu = () => {
  return (
    <div className='menu'>
        <CloseButton/>
        <ul>
            <NavLink to={'/about'}><li>About</li></NavLink>
            <NavLink to={'/vans'}><li>Vans</li></NavLink>
            <NavLink to={'/host'}><li>Host</li></NavLink>            
        </ul>
    </div>
  )
}

export default menu
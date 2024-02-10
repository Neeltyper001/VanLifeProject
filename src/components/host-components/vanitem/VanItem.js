import React from 'react'
import './index.css'
import { NavLink } from 'react-router-dom'
const VanItem = (props) => {
  return (
  
    <div className='item-container-outer'>
        <div className='item-container-inner'>
            <div className='item-image-container'>
            <NavLink to={`${props.vanItemId}`} relative="path"><img src={props.image} alt={props.name} /></NavLink>
            </div>
            <div className='item-detail'>
                <h1>{props.name}</h1>
                <p><span>{props.price}</span>/trip</p>
            </div>
        </div>
        <p className='edit-item'>Edit</p>
    </div>
    
  )
}

export default VanItem
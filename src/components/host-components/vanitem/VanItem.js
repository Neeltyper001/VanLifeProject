import React from 'react'
import './index.css'

const VanItem = (props) => {
  return (
    <div className='item-container-outer'>
        <div className='item-container-inner'>
            <div className='item-image-container'>
                <img src={props.image} alt={props.name} />
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
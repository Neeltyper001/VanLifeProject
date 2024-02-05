import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'

const VanInfo = (props) => {  
  console.log("Pappu");
  return (
    <>
    <div className="back-navigation" ><NavLink to='/vans' > &larr; back to vans page </NavLink></div>
    <div className="van-detail-container">    
      <div>
        <img src={props.vanImg} alt="your-van"/>
        <div className='van-description-body'>
          <span className={`tag ${props.vanType}`} >{props.vanType}</span>
          <h3 className='title'>{props.vanName}</h3>
          <p>{props.vanPrice}<span>/trip</span></p>
          <p>{props.vanDesc}</p>
          <button>Rent this van</button>      
        </div>
      </div>
    </div>   
    </>
  )
}

export default VanInfo
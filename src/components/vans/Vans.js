import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

const Vans = (props) => {  
  return (   
  
    <div id={props.vanId} className='van-card'>
      <Link to={`/vans/${props.vanId}`} state={props.filterState}> <img src={props.imageUrl} alt={props.heading+` image`}/></Link>
      <div>
        <h3>{props.name}</h3>
        <p>{props.price+` `}<span>/trip</span></p>
      </div>
      <i className={props.type}>{props.type}</i>
    </div>
  
  )
}

export default Vans
import React from 'react'
import Vans from '../../components/vans/Vans';
import { useState, useEffect } from 'react';
import '../../server';
import axios from 'axios';
import './index.css'

const VansPage = () => {

  const [vans,setVans] = useState([])

  useEffect(()=>{
    axios.get('/vans/data')
      .then(res => {console.log(res.data.users);setVans(res.data.users)} )
      .catch(error => console.log(error))
  }
  ,[])


  const vansArr = vans.map((van,index)=>{
    return (   <Vans 
      vanId = {index}
      imageUrl = {van.image_url}
      name = {van.name}
      price = {van.price}
      type = {van.type}
    />)

  })

  return (
      
    
    vans.length === 0   ? 
      <h2 className="loading">Loading.....</h2>:
      <>
        <h1 className="van-options">Explore our van options</h1>
          <div className="vans-container">
            {vansArr}
          </div>
       </>
    

  )
}

export default VansPage
import React from 'react'
import Vans from '../../components/vans/Vans';
import { useState, useEffect } from 'react';
import '../../server';
import axios from 'axios';
import './index.css'
import { useSearchParams } from 'react-router-dom';

const VansPage = () => {

  const [vans,setVans] = useState([])
  const [searchParams, setSearchParams] = useSearchParams();

  const filterType = searchParams.get("type");
  
  const finalFilteredVans = filterType ? vans.filter(eachVan => eachVan.type === filterType) : vans;
  console.log(finalFilteredVans);

  useEffect(()=>{
    axios.get('/vans/data')
      .then(res => {console.log(res.data.users);setVans(res.data.users)} )
      .catch(error => console.log(error))
  }
  ,[])


  const vansArr = finalFilteredVans.map((van,index)=>{
    return (   <Vans 
      key={index}
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
        <div className='filters-container'>
          <button className={'van-filter-buttons simple'} onClick={()=>{setSearchParams({type: "simple"})}}>simple</button>
          <button className={'van-filter-buttons luxury'} onClick={()=>{setSearchParams({type: "luxury"})}}>luxury</button>
          <button className={'van-filter-buttons rugged'} onClick={()=>{setSearchParams({type: "rugged"})}}>rugged</button>
          <button className={'van-filter-buttons clear'} onClick={()=>{setSearchParams({})}}>clear</button>
        </div>
          <div className="vans-container">
            {vansArr}
          </div>
       </>
    

  )
}

export default VansPage
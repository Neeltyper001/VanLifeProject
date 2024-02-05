import React from 'react'
import './index.css';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import VanItem from '../../components/host-components/vanitem/VanItem';
import axios from 'axios';
import { ListedVanContext } from '../../contexts/listedVanContext';

const HostPage = () => {
  const [hostVansData , setHostVansData] = useState([]);
  useEffect(()=>{
    axios.get('/host/vans/123')
    .then(res =>setHostVansData(res.data) )
    .catch(error => console.log(error))
 },[])

 const listVans = hostVansData.map((eachVan,index) => {
    return (
      <VanItem 
      vanItemId = {index}
      name={eachVan.name}
      price={eachVan.price}
      image={eachVan.image_url}
    />
    )
 })
  return (
  <ListedVanContext.Provider value={listVans}>
    <div className='host-page'>
        <ul className='host-page-nav'>
            <NavLink end className={({isActive}) => isActive ? "active" : null} to='/host'><li>Dashboard</li></NavLink>
            <NavLink className={({isActive}) => isActive ? "active" : null} to='/host/income'><li>Income</li></NavLink>                        
            <NavLink className={({isActive}) => isActive ? "active" : null} to='/host/vans'><li>Vans</li></NavLink>
            <NavLink className={({isActive}) => isActive ? "active" : null} to='/host/reviews'><li>Reviews</li></NavLink>
        </ul>
        <Outlet />
    </div>
  </ListedVanContext.Provider>
  )
}

export default HostPage
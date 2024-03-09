import React from 'react'
import './index.css'
import { useContext } from 'react'
import { ListedVanContext } from '../../contexts/listedVanContext'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { HostVanContext } from '../../contexts/hostVanContext'
import { useOutletContext } from 'react-router-dom'
const NestedHostVans = () => {
    const param = useParams();
    const listedVans = useContext(ListedVanContext);   
    const {listVans} = useOutletContext();
    const vanContext = listVans[param.vanId].props; //props for react element becauuse react element type object do have fields called "props"
    // console.log(listedVans[0].props)
    // const VanData = listedVans[param.vanId].props
    
  return (
      <>
        <NavLink to='..' relative='path'><p className='back-to-vans'><span>&#8592;</span> Back to vans page</p></NavLink>
        <div className='van-host-outer'>
            <div className='van-host-inner'>
                <img src={vanContext.image} alt='van-id' />
                <div>
                    <span className={`${vanContext.type}`}>{vanContext.type}</span>
                    <h1>{vanContext.name}</h1>
                    <p>{vanContext.price}<span>/day</span></p>
                </div>
            </div>

            <ul className='nested-hosted-vans'>
                <NavLink end to='.'><li>Details</li></NavLink>
                <NavLink to='pricing'><li>Pricing</li></NavLink>
                <NavLink to='photos'><li>Photos</li></NavLink>                
            
            </ul>
            <Outlet context={{vanContext}}/>
        </div>        
    </>      
  )
}

export default NestedHostVans
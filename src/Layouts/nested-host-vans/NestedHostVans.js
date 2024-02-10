import React from 'react'
import './index.css'
import { useContext } from 'react'
import { ListedVanContext } from '../../contexts/listedVanContext'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { HostVanContext } from '../../contexts/hostVanContext'

const NestedHostVans = () => {
    const param = useParams();
    const listedVans = useContext(ListedVanContext);    
    console.log(listedVans[0].props)
    const VanData = listedVans[param.vanId].props
    
  return (

    <HostVanContext.Provider value={VanData}>
        <NavLink to='..' relative='path'><p className='back-to-vans'><span>&#8592;</span> Back to vans page</p></NavLink>
        <div className='van-host-outer'>
            <div className='van-host-inner'>
                <img src={VanData.image} alt='van-id' />
                <div>
                    <span className={`${VanData.type}`}>{VanData.type}</span>
                    <h1>{VanData.name}</h1>
                    <p>{VanData.price}<span>/day</span></p>
                </div>
            </div>

            <ul className='nested-hosted-vans'>
                <NavLink end to='.'><li>Details</li></NavLink>
                <NavLink to='pricing'><li>Pricing</li></NavLink>
                <NavLink to='photos'><li>Photos</li></NavLink>                
            
            </ul>
            <Outlet/>
        </div>
    </HostVanContext.Provider>    
  )
}

export default NestedHostVans
import React from 'react'
import './index.css'
import { useContext } from 'react'
import { HostVanContext } from '../../../../contexts/hostVanContext'
const Details = () => {
  const vanData = useContext(HostVanContext)
  return (
      <section className='details-section'>
        <p><span>Name:</span>{vanData.name}</p>
        <p><span>Category:</span>{vanData.type}</p>
        <p><span>Description:</span>{vanData.description}</p>
        <p><span>Visibility:</span>Public</p>
      </section>
  )
}

export default Details
import React from 'react'
import './index.css'
import { useContext } from 'react'
import { HostVanContext } from '../../../../contexts/hostVanContext'
const Photos = () => {
  const vanData = useContext(HostVanContext);
  return (
    <section className='photos-section'>
      <img src={vanData.image} alt={vanData.name} />
  </section>
  )
}

export default Photos
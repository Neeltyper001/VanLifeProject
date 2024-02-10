import React from 'react'
import './index.css'
import { useContext } from 'react'
import { HostVanContext } from '../../../../contexts/hostVanContext'
const Pricing = () => {
  const vanData = useContext(HostVanContext)
  return (
    <section className='pricing-section'>
      <p><span>{vanData.price}</span>/trip</p>
    </section>
  )
}

export default Pricing
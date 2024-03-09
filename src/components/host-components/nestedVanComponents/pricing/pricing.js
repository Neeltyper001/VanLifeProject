import React from 'react'
import './index.css'
import { useContext, } from 'react'
import {useOutletContext} from 'react-router-dom'
import { HostVanContext } from '../../../../contexts/hostVanContext'
const Pricing = () => {
  const {vanContext} = useOutletContext()
  return (
    <section className='pricing-section'>
      <p><span>{vanContext.price}</span>/trip</p>
    </section>
  )
}

export default Pricing
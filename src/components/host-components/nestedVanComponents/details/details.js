import React from 'react'
import './index.css'
import { useContext } from 'react'
import {useOutletContext} from 'react-router-dom'
import { HostVanContext } from '../../../../contexts/hostVanContext'
const Details = () => {
  const {vanContext} = useOutletContext()
  console.log(vanContext)
  return (
      <section className='details-section'>
        <p><span>Name:</span>{vanContext.name}</p>
        <p><span>Category:</span>{vanContext.type}</p>
        <p><span>Description:</span>{vanContext.description}</p>
        <p><span>Visibility:</span>Public</p>
      </section>
  )
}

export default Details
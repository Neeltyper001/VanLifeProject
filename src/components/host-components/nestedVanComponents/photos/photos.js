import React from 'react'
import './index.css'
import { useContext } from 'react'
import {useOutletContext} from 'react-router-dom'
import { HostVanContext } from '../../../../contexts/hostVanContext'
const Photos = () => {
  const {vanContext} = useOutletContext()
  return (
    <section className='photos-section'>
      <img src={vanContext.image} alt={vanContext.name} />
  </section>
  )
}

export default Photos
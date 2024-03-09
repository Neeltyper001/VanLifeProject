import React from 'react'
import './index.css'
import { ListedVanContext } from '../../../contexts/listedVanContext'
import { useContext } from 'react'
import { useOutletContext } from 'react-router-dom'
const ListedVans = () => {

// const listVans = useContext(ListedVanContext)
// console.log(listVans)
  const {listVans} = useOutletContext()
  console.log(listVans);
  return (
    <section className='listed-vans'>
    <div className='listed-vans-title'>
      <h3>Your listed vans</h3>
      <p>View all</p>
    </div>

    <div className='listed-vans-container'>
          {listVans}
    </div>
  </section>
  )
}

export default ListedVans
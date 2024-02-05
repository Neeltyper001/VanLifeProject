import React from 'react'
import './index.css'
import { ListedVanContext } from '../../../contexts/listedVanContext'
import { useContext } from 'react'
const ListedVans = () => {

const listedVans = useContext(ListedVanContext)
console.log(listedVans)
  return (
    <section className='listed-vans'>
    <div className='listed-vans-title'>
      <h3>Your listed vans</h3>
      <p>View all</p>
    </div>

    <div className='listed-vans-container'>
          {listedVans}
    </div>
  </section>
  )
}

export default ListedVans
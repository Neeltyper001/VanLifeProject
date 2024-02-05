import React from 'react'
import ListedVans from '../listedvans/ListedVans'
import { useContext } from 'react'
import { ListedVanContext } from '../../../contexts/listedVanContext'

const VanHost = () => {
  const listedVans = useContext(ListedVanContext)
  console.log(listedVans)
  return (
    <ListedVans />
  )
}

export default VanHost
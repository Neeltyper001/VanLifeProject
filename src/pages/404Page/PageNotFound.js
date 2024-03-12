import React from 'react'
import './index.css'
import { NavLink } from 'react-router-dom'

const  PageNotFound = () => {
  return (
    <div className='page-not-found'>
      <h1>The page you are looking for cannot be found</h1>
      <NavLink to='/'><p>Back to home page</p></NavLink>
    </div>
  )
}

export default PageNotFound 
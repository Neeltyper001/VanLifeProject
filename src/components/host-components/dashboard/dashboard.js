import React from 'react'
import './index.css'

import ListedVans from '../listedvans/ListedVans';
const Dashboard = () => {

  return (
    <>
    <section className='dashboard'>
        <div className='headings'>
            <h1>Welcome!</h1>
            <p>Income last <span>30 days</span></p>
            <p>&#36;2336</p>
        </div>

        <p>Details</p>
    </section>

    <section className='review-score'>
      <div>
        <h2>Review score</h2>
        <p><span className='star'>&#9733;</span><span>5.0</span>/5</p>
      </div>
      <p>Details</p>
    </section>
        <ListedVans />
    </>

  )
}

export default Dashboard
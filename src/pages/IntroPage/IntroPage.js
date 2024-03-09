import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './index.css'
import Footer from '../../components/footer/Footer';
import { Outlet } from 'react-router-dom';



const IntroPage = () => {
  return (
   <>
      <header>
        <NavBar />
      </header>

      <main>        
        <Outlet/>
      </main>

      <footer>
        <Footer />
      </footer>
   </>
  )
}

export default IntroPage
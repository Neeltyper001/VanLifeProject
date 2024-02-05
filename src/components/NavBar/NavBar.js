import React from 'react'
import './index.css'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Hamburger from '../hamburger/hamburger'
import Menu from '../menu/menu'
import { ToggleMenuContext } from '../../contexts/menuContext'

const NavBar = () => {

  const [isMobile, setIsMobile] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);


  const handleResize = ()=>{
    setIsMobile(window.innerWidth <= 768);
  }

  const handleToggleMenu = ()=>{
    setToggleMenu(currToggle => { return !currToggle } );
  }

  useEffect(()=>{
    handleResize();
    window.addEventListener('resize' , handleResize);

    return ()=>{
      window.removeEventListener('resize' , handleResize);
    }

  },[]);



  return (
    <nav className="navBar">
            <NavLink to='/'  ><h1 id='vanLife'>#VANLIFE</h1></NavLink>        
            {toggleMenu && isMobile &&
            <ToggleMenuContext.Provider value={handleToggleMenu} >
                <Menu />
            </ToggleMenuContext.Provider>
            }
            <ul className="group-207">
                {
                isMobile ? <Hamburger eventReg={handleToggleMenu} />:
                <>
                <NavLink 
                className={({isActive}) => isActive ? "active" : null}
                to='/host'  ><li id='about'>Host</li></NavLink>
                <NavLink 
                className={({isActive}) => isActive ? "active" : null}
                to='/about'  ><li id='about'>About</li></NavLink>
                <NavLink 
                className={({isActive}) => isActive ? "active" : null}
                to='/vans'  ><li id='vans' >Vans</li></NavLink>
                </>
                }
                </ul>
    </nav>
  )
}

export default NavBar
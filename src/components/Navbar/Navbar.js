import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import NavbarStyle from './style'
import {MdMenu, MdClose} from "react-icons/md";
function Navbar() {
    const [showNav, setShowNav] = useState(false);
    const handleClick = ()=>{
      setShowNav(!showNav);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };
  return (
    <NavbarStyle>
        <div className='mobileMenuDiv' onClick={()=>setShowNav(!showNav)}><MdMenu/></div>
            <ul className={!showNav?('navItems hideItems') :('navItems')}>
                <div className='mobileCloseDiv' onClick={()=>setShowNav(!showNav)}><MdClose/></div>
                <li><NavLink to='/' onClick={handleClick}>Home</NavLink></li>
                <li><NavLink to='/about' onClick={handleClick}>About</NavLink></li>
                <li><NavLink to='/projects' onClick={handleClick}>Projects</NavLink></li>
                <li><NavLink to='/contact' onClick={handleClick}>Contact</NavLink></li>
            </ul>
    </NavbarStyle>
  )
}

export default Navbar
import { NavLink } from 'react-router-dom'

import React from 'react'

const Nav = () => {
  return(  
    <div className = "nav-container">
        <img src="images/logo.png" alt="website logo" className='logo'/>

        <div>
            <NavLink to = '/' className="nav-link"> Home </NavLink>
            <NavLink to = '/products' className="nav-link"> Products </NavLink>
        </div>
    
    </div>
  )
}

export default Nav

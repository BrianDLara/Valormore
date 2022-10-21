import { NavLink } from 'react-router-dom'

import React from 'react'

const Nav = () => {
  return(  
    <div>
        <logo></logo>
        <div>
            <NavLink to = '/' className="nav-link"> Home </NavLink>
            <NavLink to = '/products' className="nav-link"> Products </NavLink>
        </div>
    
    </div>
  )
}

export default Nav

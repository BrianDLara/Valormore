import { NavLink, Link} from 'react-router-dom'
import React from 'react'

const Nav = () => {
  return(  
    <div className = "nav-container">
      
      <span id='nav-banner'>
        <h4>It's the biggest sell of the year. Everything is currently at 15% off sitewide</h4>
      </span>
        
        <div id='nav-content'>  
          <Link to ={`/`}><img src="/images/logo1.png" alt="website logo" className='logo'/></Link>
          <div>
              <NavLink to = '/' className="nav-link"> Home </NavLink>
              <NavLink to = '/products' className="nav-link"> Products </NavLink>
          </div>
        </div>
    
    </div>
  )
}

export default Nav

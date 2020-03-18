import React from 'react'
import {NavLink} from 'react-router-dom'

import './Home.css'


const Nav = (props) => {



    return(
      <div className='navb'>
        <NavLink exact activeClassName='selected' className='a-nav' to='/'> Home </NavLink>
        <NavLink activeClassName='selected' className='a-nav' to='/TL'> TL</NavLink>
        <NavLink activeClassName='selected' className='a-nav' to='/work'> Projects </NavLink>
        {/* <NavLink activeClassName='selected' className='a-nav' to='/hobbies'> Hobbies</NavLink> */}
        <a className='a-nav' href="mailto:efrainva@gmail.com"> Contact </a> 

      </div>
    )
  
  
}

export default Nav
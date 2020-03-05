import React from 'react'
import {NavLink} from 'react-router-dom'

import './Home.css'


const Nav = (props) => {



    return(
      <div>
        <NavLink exact activeClassName='selected' className='a-nav' to='/'> Home </NavLink>
        <NavLink activeClassName='selected' className='a-nav' to='/skill'> Skills</NavLink>
        <NavLink activeClassName='selected' className='a-nav' to='/work'> Work </NavLink>
        <a href ='efrainva@gmail.com'> contact</a>
      </div>
    )
  
  
}

export default Nav
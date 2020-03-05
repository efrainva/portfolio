import React from 'react'

import p from './restaurant.png'
import T from './Team Builder.png'
import './Home.css'
import {NavLink} from 'react-router-dom'

function Home (props){

  return(<>
    <h1 className='h1name'>Efrain Vazquez</h1>
    <div className='homeD'>

      <div className='s1'>
        <NavLink to='/work'>

      <h1 className='Skill'>Work</h1>
          <div className='image'> 
          {/* <a className='image1'href='https://restaurants-nearby.netlify.com/home' target='_blank' alt='no'> */}
          <img src={p} alt='no'/>
          {/* </a> */}
          </div>
          <div className='image'> 
          {/* <a className='image1'href='https://team-builder.netlify.com' target='_blank'> */}
          <img src={T} alt='no'/>
      {/* </a> */}
          </div>
        </NavLink>
      </div>
      <div className='s2'>
          <h1 className='Skill'>Skills</h1>
          <ul>
          <li>Postgresql</li>
          <li>Java</li>
          <li>Python <img className ='py'src='https://cdn2.iconfinder.com/data/icons/programming-50/64/206_programming-python-coding-512.png' alt='no'/></li>
          <li>Javascript <img className='py' src='https://c7.uihere.com/files/780/695/593/javascript-comment-html-logo-international-conference-on-missions-node-js-icon.jpg' alt='no'/></li>
          <li>React</li>
          <li>Redux (for state management)</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JPA</li>
          <li>Springboot</li>
          <li>Heroku</li>
          <li>Netlify</li>
          </ul>
        </div>
       </div>
  </>)
}

export default Home;

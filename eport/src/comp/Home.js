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

      <h1 className='Skill'>Projects</h1>
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
          <ul>
          <h1 className='Skill'>Skills</h1>
          <li>React</li>
          <li>Java</li>
          <li>Python </li>
          <li>Postgresql</li>
          <li>Javascript </li>
          <li>Redux </li>
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

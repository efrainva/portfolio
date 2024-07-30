import React from 'react'

// import p from './restaurant.png'
// import T from './Team Builder.png'
import './Home.css'
import {Link} from 'react-router-dom'

function Home (props){

  return(<>

    <h1 className='h1name'>Efrain Vazquez</h1>
    <div className='homeD'>
      <div className='s1'>
        {/* <Link to='/work'> */}

      <h1 className='Skill'>Projects</h1>
      

      <h1 className='skill'>current project</h1>
      <a className='image'href='https://github.com/efrainva/apartmentFE' target='_blank'> 
            <h2>
              github link to apartmentFE
            </h2>
             </a> 
          {/* <div className='image'> 
           
          </div> */}
          <h1>previous projects</h1>
          <div className='image'> 
           <a className='image'href='https://github.com/team-builder-build-weeks/Team-Builder-FE' target='_blank'> 
            <h2>
              github link to team builder
            </h2>
             </a> 
              _
            <h2><a className='image'href='https://github.com/Build-Week-Restaurant-Passport/Back-End' target='_blank' alt='no'>
              github to restaurant back endmade in springboot
            </a> </h2>
          </div>
          
        {/* </Link> */}
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

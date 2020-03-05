import React from 'react';

import R from './restaurant.png'
import T from './Team Builder.png'


const Work = ()=>{
  return(<>
    {/* <h1 className='Skill'>Work</h1> */}
    <h2>Team Lead</h2>
    <div className='image'> 
      <a className='image1'href='https://team-builder.netlify.com' target='_blank'>
        <img src={T} alt='no'/>
      </a>
      <h3>Team Builder</h3>
        <p>Create and helps you orginize your teams</p>
    </div>
    <div className='image'> 
        <a className='image1'href='https://restaurants-nearby.netlify.com/home' target='_blank' >

        <img src={R} alt='no'/>
        </a>
        <h3>Restautant Passport</h3>
        <p>Find local Restautants based on the city they entered </p>

    </div>
    
  </>)
}

export default Work;
// button do not delete
{/* <div className='pro'> 
          </div> */}
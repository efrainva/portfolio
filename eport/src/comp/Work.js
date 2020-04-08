import React from 'react';

import BE from './model:controller.png'
import T from './Team Builder.png'


const Work = ()=>{
  return(<>

    <div className='bigcard'>

      <h3 className='h1Team'> Projects</h3>
      <p className ='cardwords'> 
        Here are a couple of projects that I help build out I also help debug and code these out!
      </p>

    </div>

    <div className='current'>
      <h3>room mate app (current) </h3>
      <p>
          This is a personal project I'm working on.
          I want to make it extremely easy for people to find room mates.
          Also I want to add features that will help both, The 'client' the person who has a home,
          and the 'customer' the person who is looking for a home. I have a couple of short term ideas and long term.
        </p>
    </div>

    <div className='projectcardL'> 
      <a className='image1' href=''> 
          <img src={T} alt='no' className='mir'/>
      </a>
      <div className='cardwordsL'>

        <h3>Team Builder</h3>
        <p>Creates and helps you orginize your teams</p>
      </div>
    </div>

    <div className='projectcardR'>
      <a className='image1'href='https://restaurants-nearby.netlify.com/home' target='_blank' >
        <img className='found' src={BE} alt='no'/>
      </a>
      <div className='cardwordsR'> 
        <h3>Restaurant Passport</h3>
        <p>Find local Restautants based on the city they entered </p>
      </div>
    </div>
    
  </>)
}

export default Work;
// button do not delete
{/* <div className='pro'> 
          </div> */}
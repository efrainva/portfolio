import React from 'react'

import './Home.css'
import M from './miracle.png'
import F from './founder.png'
const TL = () => {

  return(<>
  {/* https://miracle-message.netlify.com/ */}
    <section>
      <div className='bigcard'>
      <h1 className='h1Team'>Team Lead</h1>
        <p className ='cardwords'> I managed several teams of 6-8 developers through bugs, personality clashes, merge conflicts and more!
          Check out some of the projects we did together.
        </p>
      </div>

      <div className='projectcardL'> 
        <a className='image1'href='https://miracle-message.netlify.com/' target='_blank' >
          <img className='mir' src={M} alt='no'/>
        </a>
        <div className='cardwordsL'>

        <h3>Miracle Messages</h3>
        <p>Miracle Messages is a non-profit organization that helps reunite homeless individuals with their loved ones. We worked together to build out a branch of their site showcasing a map of where to find other volunteers, how many people are in that area, and how many reunions have been made by those volunteers</p>
        </div>
      </div>
      
      <div className='projectcardR'> 
        <a className='image1'href='https://www.foundergrants.com/.com' target='_blank' >
         <img className='found' src={F} alt='no'/>
        </a>
        <div className='cardwordsR'> 
        <h3>Founder Grants</h3>
        <p>Founder Grants is a community driven database that is not yet released to the public. </p>
        </div>
      </div>
    </section>
   
  </>)

}

export default TL;
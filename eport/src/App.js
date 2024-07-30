import React from 'react';

import './App.css';
import Nav from './comp/Nav'
import Home from './comp/Home'
import TL from './comp/TL'
import Work from './comp/Work'
import Hobby from './comp/Hobbies'

import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      {/* <Nav/> */}
      <Routes>
        <Route exact path='/' component={Home} />
        <Route path='/TL' component={TL} />
        <Route path='/work' component={Work} />
        <Route path='/hobbies' component={Hobby} />
      </Routes>
      <Home/>
    </div>
  );
}

export default App;

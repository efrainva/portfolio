import React from 'react';

import './App.css';
import Nav from './comp/Nav'
import Home from './comp/Home'
import Skill from './comp/Skill'
import Work from './comp/Work'

import {Switch,Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/skill' component={Skill} />
        <Route path='/work' component={Work} />
      </Switch>

    </div>
  );
}

export default App;

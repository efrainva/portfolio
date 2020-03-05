import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {applyMiddleware, createStore } from 'redux' 
import {composeWithDevTools} from 'redux-devtools-extension'
import App from './App';
import {rootReducer} from './Redux/reducer/index'
import {BrowserRouter as Router} from 'react-router-dom'
                          //reducer here
const store = createStore(rootReducer,
  composeWithDevTools(applyMiddleware(logger,thunk))
  )

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App /> 
    </Router>
  </Provider>,
document.getElementById('root'));

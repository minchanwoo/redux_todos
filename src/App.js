import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';

import List from './pages/list';
import Detail from './pages/detail';

export default ()=> (
  <Router>
    <div className='App'>
      <Route path='/' exact component={List} />
      <Route path='/:id' component={Detail} />
    </div>
  </Router>
)

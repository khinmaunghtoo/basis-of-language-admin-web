import React, { Component } from 'react';
import './App.css';


import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import Main from './components/main';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route path={`/burmese`} render={() => (
            <Main language='burmese' />
          )} />
          <Route path={`/thai`} render={() => (
            <Main language='thai' />
          )} />
        </div>
      </Router>
    );
  }
}

export default App;
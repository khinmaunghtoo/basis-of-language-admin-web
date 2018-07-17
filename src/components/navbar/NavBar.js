import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

export default class NavBar extends Component {
  render() {
    return (
      <div className='navcontainer'>
        <div className='buttonContainer'><Link to={`/burmese`} className='buttonText'>緬甸語</Link></div>
        <div className='buttonContainer'><Link to={`/thai`} className='buttonText'>泰語</Link></div>
      </div>
    )
  }
};


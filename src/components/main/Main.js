import React, { Component } from 'react';

import WorkingArea from '../workingarea';
import SideBar from '../sidebar';

import './main.css'

export default class Main extends Component {
  
  render() {
    return (
      <div className='maincontainer'>
        <SideBar language={this.props.language}/>
        <WorkingArea />
      </div>
    )
  }
};

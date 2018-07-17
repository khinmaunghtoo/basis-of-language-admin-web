import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

export default class SideBar extends Component {

  render() {
    return (
      <div className='sidebarcontainer'>
        <div><Link to={`/${this.props.language}/consonants`}>consonants</Link></div>
        <div><Link to={`/${this.props.language}/vowels`}>vowels</Link></div>
      </div>
    )
  }
};

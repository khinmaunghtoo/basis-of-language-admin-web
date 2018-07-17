import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './workingarea.css'

import Consonants from '../consonants';
import Vowels from '../vowels';

export default class WorkingArea extends Component {

  render() {
    return (
      <div className='workingarea-container'>
        <Route
          path='/burmese/consonants'
          render={() => (
            <div>
              <div className='title'>burmese consonants</div>
              <Consonants language='burmese' />
            </div>
          )}
        />
        <Route
          path='/burmese/vowels'
          render={() => (
            <div>
              <div className='title'>burmese vowels</div>
              <Vowels language='burmese' />
            </div>
          )}
        />
        <Route
          path='/thai/consonant'
          render={() => (
            <div>thai consonants</div>
          )}
        />
        <Route
          path='/thai/vowels'
          render={() => (
            <div>thai vowels</div>
          )}
        />
      </div>
    )
  }
};

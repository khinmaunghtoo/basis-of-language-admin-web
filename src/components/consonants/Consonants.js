import React, { Component } from 'react';

import './consonants.css';

export default class Consonants extends Component {

  state = {
    consonants: [],
    consonant: '',
    code: ''
  }

  componentDidMount() {
    fetch(`https://us-central1-basis-of-language.cloudfunctions.net/getConsonants?language=${this.props.language}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.setState({
          consonants: data
        })
      })
      .catch(e => console.log(e))
  }

  handleChange = (key) => (event) => {
    this.setState({
      [key]: event.target.value
    })
  }

  submit = () => {
    const { consonant, code } = this.state
    this.addCosonant(consonant, code)
  }

  addCosonant = async (consonant, code) => {
    try {
      const response = await fetch(`https://us-central1-basis-of-language.cloudfunctions.net/addConsonant?consonant=${consonant}&code=${code}`
      )
      const id = await response.text()
      this.setState(prevState => {
        return {
          consonants: [...prevState.consonants, { consonant: this.state.consonant, code: this.state.code, id: id }],
          consonant: '',
          code: ''
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className='consonants-container'>
        <div>
          <input
            placeholder='consonant'
            onChange={this.handleChange('consonant')}
            value={this.state.consonant}
          />
          <input
            placeholder='code'
            onChange={this.handleChange('code')}
            value={this.state.code}
          />
          <button onClick={this.submit}>submit</button>
        </div>
        {this.state.consonants.sort((a, b) => a.consonant > b.consonant).map(item => (
          <div key={item.id}>consonant: {item.consonant} code: {item.code}</div>
        ))}
      </div>
    )
  }
};

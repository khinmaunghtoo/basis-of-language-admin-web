import React, { Component } from 'react';
import './vowels.css'
export default class Vowels extends Component {

  state = {
    vowels: [],
    newVowel: {
      vowel: '',
      code: '',
      tones: []
    }
  }

  componentDidMount() {
    fetch(`https://us-central1-basis-of-language.cloudfunctions.net/getVowels?language=${this.props.language}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.setState({
          vowels: data
        })
      })
      .catch(e => console.log(e))
  }

  handleChange = key => event => {
    if (key === 'tones') {
      this.setState({
        newVowel: {
          ...this.state.newVowel,
          tones: [...event.target.value.split(',')]
        }
      }, () => console.log(this.state.newVowel))
    } else {
      this.setState({
        newVowel: {
          ...this.state.newVowel,
          [key]: event.target.value
        }
      }, () => console.log(this.state.newVowel))
    }
  }

  handleSubmit = () => {
    const data = JSON.stringify(this.state.newVowel)
    const url = `https://us-central1-basis-of-language.cloudfunctions.net/addVowel`
    fetch(url, {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.text())
      .then(id => this.setState({
        vowels: [...this.state.vowels, { ...this.state.newVowel, id: id }],
        newVowel: {
          vowel: '',
          code: '',
          tones: []
        }
      }))
      .catch(e => console.log(e))
  }

  render() {
    return (
      <div className='vowels-container'>
        <div>
          <input
            placeholder='vowel'
            value={this.state.newVowel.vowel}
            onChange={this.handleChange('vowel')}
          />
          <input
            placeholder='code'
            value={this.state.newVowel.code}
            onChange={this.handleChange('code')}
          /><br />
          <input
            placeholder='tones'
            value={this.state.newVowel.tones.join(',')}
            onChange={this.handleChange('tones')}
          /><br />
          <button onClick={this.handleSubmit}>add new vowel</button>
        </div>
        <div>
          {this.state.vowels.map(vowel => (
            <div key={vowel.id}>
            vowel : {vowel.vowel} code: {vowel.code} tones: {vowel.tones.map((tone, index) => (<span key={index}>{tone}</span>))}
            </div>
          ))}
        </div>
      </div>
    )
  }
};

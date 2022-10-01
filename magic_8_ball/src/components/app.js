import React, { Component } from 'react';



export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Magic 8 Ball</h1>
        <h2>Class Project</h2>
          <img src={require('../images/Magic8ball2.png')} />
      </div>
    );
  }
}

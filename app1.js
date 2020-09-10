import React, { Component } from 'react';
import Enter from './components/InputComponent';
import Cardaccount from './components/CardComponent';
import './App.css';

class App extends Component {
  render() {

  return (
      <div>
        <Enter />
        <Cardaccount/>
      </div>
  );
}
}

export default App;

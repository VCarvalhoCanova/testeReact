
import './App.css';
import React, { Component } from 'react';
import Conversor from './components/Conversor';

class App extends Component{
  render(){
    return(
      <div className="App">
        <Conversor moedaa="USD" moedab="BRL"></Conversor>
      </div>
    )
  }
}


export default App;

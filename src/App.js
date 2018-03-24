import React, { Component } from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import './App.css';

class App extends Component {

  
  render() {
    
    return (
     <div>
      <h1>Pick One!</h1>
      <button>10-Codes</button> <button>Signals</button>
      <div className='border' > Test Questions
      <ul>
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
      </ul>
       </div>
      <button>Check Answer</button>
      
     </div>
    );
  }
}




export default App;

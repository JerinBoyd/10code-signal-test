import React, { Component } from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import './App.css';

class App extends Component {

  
  render() {
    
    return (
     <div>
    <body> 
      <h1>10Code Quiz</h1>
      <form>
        <ol>
        <li>10-1</li>
          <ul>
            <input type="radio" name="q1" value='incorrect' /> Receiving Well <br/>
            <input type="radio" name="q1" value='correct' /> Receiving Poorly <br/>
            <input type="radio" name="q1" value='incorrect' /> Emergency Traffic <br/>
            <input type="radio" name="q1" value='incoreect'/> Acknowledged <br/>
          </ul>
        <li>10-2</li>
        <li>10-3</li>
        </ol>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    </body>
      
     </div>
    );
  }
}




export default App;

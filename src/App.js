import React, { Component } from "react";
import Bootstrap from "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [
        
        {
          number: "10-1",
          answers: [
            'Receiving Poorly',
            'Receiving Well',
            'Emergency Traffic'
          ]
        },
        {
          number: "10-2",
          answers: [
            'Acknowledged',
            'Receiving Poorly',
            'Receiving Well'
          ]
        },
        {
          number: "10-3",
          answers: [
            'Disregard',
            'Speaking Too Fast',
            'Stop Transmitting'
          ]
        },
      
      ]
    };
  }

 
check = () => {
  console.log('checked')
}
  render() {
    return (
      <div>
        <body>
          <h1>10Code Quiz</h1>

          {this.state.questions.map(q => (
            <div>
              {" "}
              <h1>{q.number}</h1>
              <ul >
                {q.answers.map(answer => <li className="dots" >
                 <input type="radio" name="" id=""/> {answer}
                </li  > )}
              </ul>
               <button onClick={this.check} >Submit</button>{" "}
              <button type="reset">Reset</button>{" "}
            </div>
          ))}
        </body>
      </div>
    );
  }
}

export default App;

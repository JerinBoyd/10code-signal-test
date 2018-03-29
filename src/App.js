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
          answerIndex: 1,
          answers: [
            'Receiving Poorly',
            'Receiving Well',
            'Emergency Traffic'
          ]
        },
        {
          number: "10-2",
          answerIndex: 2,
          answers: [
            'Acknowledged',
            'Receiving Poorly',
            'Receiving Well'
          ]
        },
        {
          number: "10-3",
          answerIndex: 3,
          answers: [
            'Disregard',
            'Speaking Too Fast',
            'Stop Transmitting'
          ]
        },
      
      ]
    };
  }

 
checkAnswer = (position, answerIndex) => {
  console.log('checked')
}
  render() {
    return (
      <div>
       
          <h1>10 Code Quiz</h1>

          {this.state.questions.map((q, index) => (
            <div>
              {" "}
              <h2>{q.number}</h2>
              <ul >
                {q.answers.map(answer => <li className="dots" >
                 <input type="radio" name="" id=""/> {answer}
                </li  > )}
              </ul>
               <button onClick= {() => {
                 this.checkAnswer(index, q.answerIndex)}} >Submit</button>{" "}
               <input type="reset" id="btnReset" value="Reset Count" />{" "}
            </div>
          ))}
       
      </div>
    );
  }
}

export default App;

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
          answerIndex: 0,
          answers: [
            'Receiving Poorly',
            'Receiving Well',
            'Emergency Traffic'
          ],
          result: null
        },
        {
          number: "10-2",
          answerIndex: 2,
          answers: [
            'Acknowledged',
            'Receiving Poorly',
            'Receiving Well'
          ],
          result: null,
        },
        {
          number: "10-3",
          answerIndex: 2,
          answers: [
            'Disregard',
            'Speaking Too Fast',
            'Stop Transmitting'
          ],
          result: null
        },
      
      ]
    };
  }

 
checkAnswer = (position, selectedAnswer) => {
    const question = this.state.questions[position];
    const before = this.state.questions.slice(0, position);
    const after = this.state.questions.slice(position + 1);
    const newQuestion = {
      ...question,
      result: selectedAnswer === question.answers[question.answerIndex]
    }
    this.setState({
      questions: [
        ...before,
        newQuestion,
        ...after
      ]
    })
}
  render() {
    return (
      <div>
       
          <h1>10Code Quiz</h1>

          {this.state.questions.map((q, index) => {
            let selectedAnswer = null;
            // from this point on make a new QuizQuestion component
            return (<div>  
              {" "}
              <h2>{q.number}</h2>
              <ul >
                {q.answers.map(answer => <li className="dots" >
                 <input type="radio" name={q.number} value={answer} onClick={e => selectedAnswer = e.target.value}/> {answer}
                </li  > )}
              </ul>
               <button onClick= {() => {
                 this.checkAnswer(index, selectedAnswer)}} >Submit</button>{" "}
               <input type="reset" id="btnReset" value="Reset" />{" "}
               {q.result ? <h1>This question has been answered</h1> : null}
            </div>)
          })}
       
      </div>
    );
  }
}

export default App;

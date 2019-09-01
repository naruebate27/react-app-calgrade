import React, { Component } from 'react';
import './App.css';
import Containers from './containers/containers';
import Textinput from './components/Textinput';
import Button from './components/Button';

class App extends Component {

  state = {
    score: 0,
    grade: ''
  }
  inputChangeHandler = (event) => {
    let value = event.target.value;
    this.setState({
      score: value
    });
  }

  calculateGradeHandler = () => {
    let score = this.state.score
    let grade = ''
    if(score >= 80){
      grade = 'A'
    }else{
      grade = 'F'
    }

  this.setState({
    grade: grade
  });

  }

  render() {
    return (
      <Containers>
        <div className="input-group mb-3">
          <Textinput type="number" value={this.state.score} classes="form-control" placeholder="input your score" change={this.inputChangeHandler} />
          <div className="input-group-append">
            <Button click={this.calculateGradeHandler}>Click me</Button>
          </div>
        </div>
        <h1>Grade : {this.state.grade}</h1>
      </Containers>
    );
  }
}


export default App;

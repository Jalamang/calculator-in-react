import { Component } from "react";
import "./App.css";
import NumberComponent from "./components/NumberComponent";
import ResultComponent from "./components/ResultComponent";
import OperatorComponent from "./components/OperatorComponent";
import ChangeStateComponent from "./components/ChangeStateComponent";
import DigitsComponent from "./components/DigitsComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      numberStored: "",
      number: "",
      operator: null,
    };
  }
  //when number key is pressed
  whenNumberKeyPressed = (value) => {
    this.setState({ number: this.state.number + value });
  };

//Tracks variables in state
handleSetStoredValue = () => {
  this.setState({ numberStored: this.state.number, number: "" });
};

//Handles functionalities
handleSetCalcFunction = (value) => {
  console.log(value);
  if (this.state.number) {
    this.setState({
      operator: value,
    });
    this.handleSetStoredValue();
  }
  if (this.state.numberStored) {
    this.setState({ operator: value });
  }
};


  render() {
    
    return (
      <>
        <h1>Simple Calculator</h1>
        <div className="app-div">
          {/* Renders display */}
          <ResultComponent number={this.state.number || 0} 
          />
          <NumberComponent whenNumberKeyPressed={this.whenNumberKeyPressed}
          />
          
        </div>
      </>
    );
  }

}

export default App;

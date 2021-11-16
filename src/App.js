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

  //To calculate final output when (=) key is pressed
  calculateFinalValue = () => {
    let currentNumber = Number(this.state.number);
    let storedNumber = Number(this.state.numberStored);

    if (currentNumber && storedNumber) {
      switch (this.state.operator) {
        case "+":
          this.setState({ number: storedNumber + currentNumber });
          break;
        case "-":
          this.setState({ number: storedNumber - currentNumber });
          break;
        case "/":
          this.setState({ number: storedNumber / currentNumber });
          break;
        case "*":
          this.setState({ number: storedNumber * currentNumber });
          break;
        default: {
          this.setState({ number: "" });
        }
      }
    }
  };

  handleZero = (value) => {
    console.log(value);
    if (this.state.number !== "") {
      this.setState({ number: this.state.number + value });
    }
  };

  handleDecimalPoint = (value) => {
    if (this.state.number.indexOf(".") === -1) {
      this.setState({ number: this.state.number + value });
    }
  };


  render() {
    return (
      <>
        <h1>Simple Calculator</h1>
        <div className="app-div">
          {/* Renders display */}
          <ResultComponent number={this.state.number || 0} />
          <NumberComponent whenNumberKeyPressed={this.whenNumberKeyPressed} />
          <OperatorComponent
            calculateFinalValue={this.calculateFinalValue}
            handleSetCalcFunction={this.handleSetCalcFunction}
            handleSetStoredValue={this.handleSetStoredValue}
          />
          <DigitsComponent
            handleZero={this.handleZero}
            handleDecimalPoint={this.handleDecimalPoint}
          />
        </div>
      </>
    );
  }
}

export default App;

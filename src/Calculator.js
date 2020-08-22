import React from 'react'

class Calculator extends React.Component {
  constructor() {
    super()
    this.state = {
      firstOperand: 0,
      operator: '+',
      secondOperand: 0,
      result: ''
    }
    //this.onFirstOperandChange = this.onFirstOperandChange.bind(this)
    // not needed with fatarrow below

  }
  onFirstOperandChange = (event) => {
    /*const newValue = event.target.value;
    this.setState({ 
    firstOperand: newValue
    })*/
    this.setState({
      firstOperand: event.target.value
    })
  }

  onSecondOperandChange = (event) => {
    this.setState({
      secondOperand: event.target.value
    })
  }
  onOperatorChange = (event) => {
    this.setState({
      operator: event.target.value
    })
  }
  calculate = () => {
    let result = 0;
    const { firstOperand, secondOperand, operator } = this.state;

    switch (operator) {
      case '+':
        result = parseInt(firstOperand) + parseInt(secondOperand);
        break;
      case '-':
        result = parseInt(firstOperand) - parseInt(secondOperand);
        break;
      case '*':
        result = parseInt(firstOperand) * parseInt(secondOperand);
        break;
      case '/':
        result = parseInt(firstOperand) / parseInt(secondOperand);
        break;
      default:
        break;
    }
    this.setState({
      result
    })
  }


  render() {
    return (
      <div>
        <input type="number " onChange={this.onFirstOperandChange} />

        <select onChange={this.onOperatorChange}>
          <option>+</option>
          <option>-</option>
          <option>*</option>
          <option>/</option>
        </select>
        <input type="number" onChange={this.onSecondOperandChange} />

        <button onClick={this.calculate}>=</button>

        <input value={this.state.result} type="text" disabled />
      </div>
    )
  }

}

export default Calculator
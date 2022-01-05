// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  chechEvenOrOdd = () => {
    this.setState(() => ({count: Math.ceil(Math.random() * 100)}))
  }

  getEvenOrOdd = () => {
    const {count} = this.state

    return count % 2 === 0 ? 'Even' : 'Odd'
  }

  render() {
    const {count} = this.state
    const result = this.getEvenOrOdd()
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">Count {count} </h1>
          <p className="evenOrOddClass">Count is {result}</p>
          <button
            className="btn-class"
            type="button"
            onClick={this.chechEvenOrOdd}
          >
            Increment
          </button>
          <p className="info-para">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp

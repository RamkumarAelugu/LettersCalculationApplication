// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  lettersCount = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          className="image"
          alt="letters calculator"
        />
        <div className="item-container">
          <h1 className="heading">Calculate the letters you enter</h1>
          <div>
            <label htmlFor="letter" className="paragraph">
              Enter the phrase
            </label>
            <br />
            <input
              type="text"
              className="input"
              id="letter"
              onChange={this.lettersCount}
              placeholder="Enter the phrase"
            />
          </div>
          <p className="a-paragraph">No.of Letters: {count}</p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator

import React, { Component } from 'react';


export class Counter extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  increase = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  decrease = () => {
    this.setState({
      count: this.state.count - 1
    })
  }


  render() {
    return (
      <div className="counter">
        <h3>{this.state.count}< /h3>
        <div>
          <button onClick={this.increase}>+</button>
          <button onClick={this.decrease}>-</button>
        </div>
      </div>
    )
  }

}

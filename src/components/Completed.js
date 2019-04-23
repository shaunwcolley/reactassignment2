import React, { Component } from 'react';

export class Completed extends Component {
  render() {
    let tasks = this.props.tasks
    let completedItems = tasks.map((task,index) => {
      return (
        <li className="taskLi" key={index}>
          <span>{task}</span>
          <div>
            <button id={index} value={task} onClick={this.props.handleMoveClick}>Move to Pending</button>
            <button id={index} value={task} onClick={this.props.handleDeleteCompletedClick}>Delete</button>
          </div>
          </li>
      )
    })
    return (
      <div className="taskDiv">
        <h3>Completed Items</h3>
        <div className="table">
          <ul>{completedItems}</ul>
        </div>
      </div>
    )
  }
}

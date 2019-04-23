import React, { Component } from 'react';

export class Completed extends Component {
  render() {
    let tasks = this.props.tasks
    let completedItems = tasks.map((task,index) => {
      return (
        <li key={index}>
          <span>{task}</span>
          <button value={task} onClick={this.props.handleMoveClick}>Move to Pending</button>
          <button value={task} onClick={this.props.handleDeleteCompletedClick}>Delete</button>
          </li>
      )
    })
    return (
      <div>
        <h3>Completed Items</h3>
        <ul>{completedItems}</ul>
      </div>
    )
  }
}

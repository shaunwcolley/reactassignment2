import React, { Component } from 'react';

export class Pending extends Component {

  render() {
    let tasks = this.props.tasks
    let pendingItems = tasks.map((task,index) => {
      return (
        <li key={index}>
          <span>{task}</span>
          <button value={task} onClick={this.props.handleCompleteClick}>Completed</button>
          <button value={task} onClick={this.props.handleDeletePendingClick}>Delete</button>
          </li>
      )
    })

    return (
      <div>
        <h3>Pending Items</h3>
        <ul>{pendingItems}</ul>
      </div>
    )
  }
}

import React, { Component } from 'react';

export class Pending extends Component {

  render() {
    let tasks = this.props.tasks
    let pendingItems = tasks.map((task,index) => {
      return (
        <li className="taskLi" key={index}>
          <p>{task}</p>
          <div>
            <button id={index} value={task} onClick={this.props.handleCompleteClick}>Move to Completed</button>
            <button id={index} value={task} onClick={this.props.handleDeletePendingClick}>Delete</button>
          </div>
          </li>
      )
    })

    return (
      <div className="taskDiv">
        <h3>Pending Items</h3>
        <div className="table">
          <ul>{pendingItems}</ul>
        </div>
      </div>
    )
  }
}

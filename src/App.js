import React, { Component } from 'react';
import './App.css';
import './Custom.css'
import {Pending} from './components/Pending'
import {Completed} from './components/Completed'

class App extends Component  {

  constructor() {
    super()
    this.state = {
      taskName: 'Mow the lawn',
      pendingTasks: [],
      completedTasks: []
    }
  }

  handleTextChange = (e) => {
    this.setState({
      taskName: e.target.value
    })
  }

  handleSaveClick = () => {
    let task = this.state.taskName
    this.setState({
      pendingTasks: this.state.pendingTasks.concat(task),
      taskName: ''
    })
  }

  handleCompleteClick = (e) => {
    let newPendingTasks = this.state.pendingTasks.filter((task) => {
      return task !== e.target.value
    })
    let task = e.target.value
    this.setState({
      completedTasks: this.state.completedTasks.concat(task),
      pendingTasks: newPendingTasks
    })
  }

  handleMoveClick = (e) => {
    let newCompletedTasks = this.state.completedTasks.filter((task) => {
      return task !== e.target.value
    })
    let task = e.target.value
    this.setState({
      completedTasks: newCompletedTasks,
      pendingTasks: this.state.pendingTasks.concat(task)
    })
  }

  handleDeleteCompletedClick = (e) => {
    let newCompletedTasks = this.state.completedTasks.filter((task) => {
      return task !== e.target.value
    })
    this.setState({
      completedTasks: newCompletedTasks
    })
  }

  handleDeletePendingClick = (e) => {
    let newPendingTasks = this.state.pendingTasks.filter((task) => {
      return task !== e.target.value
    })
    this.setState({
      pendingTasks: newPendingTasks
    })
  }

  render() {
    return (
      <div className="body">
        <div>
          <input id="taskBox" onChange={this.handleTextChange} type="text" value={this.state.taskName}/>
          <button onClick={this.handleSaveClick}>Add</button>
        </div>
        <Pending tasks={this.state.pendingTasks} handleCompleteClick={this.handleCompleteClick} handleDeletePendingClick={this.handleDeletePendingClick}/>
        <Completed tasks={this.state.completedTasks} handleMoveClick={this.handleMoveClick} handleDeleteCompletedClick={this.handleDeleteCompletedClick}/>
      </div>
    );
  }
}

export default App;

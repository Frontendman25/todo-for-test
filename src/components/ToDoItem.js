import React, { Component } from 'react'
import Calendar from './Calendar'

import './ToDoInput.css'

export default class ToDoItem extends Component {
  state = {
    display: false
  }

  handleClickToggle = () => {
    this.setState({
      ...this.state,
      display: !this.state.display
    })
    console.log()
  }

  render() {
    const { title, handleDelete, handleEdit } = this.props
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div className="todo-icon">
          <span
            className="mx-2 text-success"
            onClick={handleEdit}
          >
            <i className="pen fas fa-pen"></i>
          </span>
          <span
            className="calendar mx-2 text-primary"
            onClick={this.handleClickToggle}
          >
            <i className="calendar fas fa-calendar"></i>
          </span>
          <span
            className="trash mx-2 text-danger"
            onClick={handleDelete}
          >
            <i className="trash fas fa-trash"></i>
          </span>
          {this.state.display
            ?
            <Calendar />
            :
            null
          }
        </div>
      </li>
    )
  }
}

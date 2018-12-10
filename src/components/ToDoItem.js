import React, { Component } from 'react'

import './ToDoInput.css'

export default class ToDoItem extends Component {
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
            className="trash mx-2 text-danger"
            onClick={handleDelete}
          >
            <i className="trash fas fa-trash"></i>
          </span>
        </div>
      </li>
    )
  }
}

import React, { Component } from 'react'
import ToDoList from './ToDoList'
import ToDoInput from './ToDoInput'
import { Link } from 'react-router-dom'

import uuid from 'uuid'

class ToDoMain extends Component {
  state = {
    items: [],
    id: uuid(),
    item: '',
    editItem: false
  }

  handleChange = (e) => {
    this.setState({
      item: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const newItem = {
      id: this.state.id,
      title: this.state.item
    }
    const updatedItems = [...this.state.items, newItem]

    this.setState({
      items: updatedItems,
      item: '',
      id: uuid(),
      editItem: false
    })
  }

  clearList = () => {
    this.setState({
      items: []
    })
  }

  handleDelete = (id) => {
    const filteredIdItems = this.state.items.filter(item => item.id !== id)

    this.setState({
      items: filteredIdItems
    })
  }

  handleEdit = id => {
    const filteredIdItems = this.state.items.filter(item => item.id !== id)

    const selectedItem = this.state.items.find(item => item.id === id)

    console.log(selectedItem)

    this.setState({
      ...this.state,
      items: filteredIdItems,
      item: selectedItem.title,
      editItem: true,
      id: id
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto com-md-8 mt-4">
            <h3 class="text-capitalize text-center">
              <button className="btn btn-primary">
                <Link to="/" style={{color: "#fff"}}>
                  Login
                </Link>
              </button>
            </h3>
            <ToDoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <ToDoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ToDoMain

import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import ToDoList from './components/ToDoList'
import ToDoInput from './components/ToDoInput'

class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto com-md-8 mt-4">
            <h3 className="text-capitalize text-center">Enter Your Name</h3>
            <button
              className={
                editItem
                ? "btn btn-block btn-success mt-3"
                : "btn btn-block btn-primary mt-3"
              }
                type="submit"
            >
              {editItem ? 'Edtit Item' : 'Add Item'}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

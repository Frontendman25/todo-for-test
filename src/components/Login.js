import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import ToDoList from './ToDoList'
import ToDoInput from './ToDoInput'

class Login extends Component {
  state = {
    items: [],
    name: '',
    access: false
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    let names = [...this.state.items, this.state.name]

    this.setState({
      ...this.state,
      access: true,
      items: names
    })

    localStorage.setItem("name", JSON.stringify(names))
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto com-md-8 mt-4">
            <h3 className="text-capitalize text-center">Enter Your Name</h3>
            <form onSubmit={this.handleSubmit}>
              <div className="input-group">
                <input
                  onChange={this.handleChange}
                  className="form-control text-capitalize"
                  type="text"
                  placeholder="Login"
                />
                <button
                  className={"btn btn-block btn-primary mt-3"}
                  type="submit"
                >
                  Submit
                </button>
                {this.state.access ? <Redirect to="/todo" /> : null}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login
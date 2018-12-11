import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import ToDoList from './ToDoList'
import ToDoInput from './ToDoInput'

class Login extends Component {
  state = {
    items: localStorage.getItem("name") || [],
    name: '',
    access: false,
    nameError: ''
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    if(!this.state.items.includes(this.state.name)){
      let names = [this.state.items, this.state.name]
      
      this.setState({
        ...this.state,
        access: true,
        items: names,
        nameError: ''
      })

      localStorage.setItem("name", JSON.stringify(names))
    }else{
      this.setState({
        ...this.state,
        nameError: 'This name is already exists'
      })
    }

    
  }

  render() {
    console.log(this.state)
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
                {this.state.nameError ? <span className="error">{this.state.nameError}</span> : null}
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
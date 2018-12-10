import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Login from './components/Login'
import ToDoMain from './components/ToDoMain'
import ToDoList from './components/ToDoList'
import ToDoInput from './components/ToDoInput'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import uuid from 'uuid'

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Login}/>
          <Route path="/todo" component={ToDoMain}/>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;

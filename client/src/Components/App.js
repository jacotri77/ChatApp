import React, { Component } from 'react'
import '../index.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './login'
import ChatRoom from './chatRoom'
import 'font-awesome/css/font-awesome.css'

class App extends Component {
  

  render() {
    return (
      <Router>
        <div className="appContainer">
          <Route exact={true} path="/" component={Login} />
          <Route path="/chatroom" component={ChatRoom} />
        </div>
      </Router>   
    )
  }
}
export default App

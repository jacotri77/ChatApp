import React, { Component } from 'react'
import './index.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
// import Login from './login'
import ChatRoom from './chatRoom'

class App extends Component {
  render(){
    return(
      <Router>
        <div>
        
          <Route path="/chatRoom/" component={ChatRoom} />
        </div>
      </Router>
        )
    }
}
export default App

  // <Route exact={true} path="/" component={Login} />
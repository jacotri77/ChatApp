import React, { Component } from 'react'
import '../index.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './login'
import ChatRoom from './chatRoom'

class App extends Component {
  constructor(props){
    super()
    this.state = {
      users: [], 
      messages:[], 
    
    }
  }

  
  render(){
    return(
        <Router>
          <div>
            <Route exact={true} path="/" component={Login} />
            <Route path="/chatroom/" component={ChatRoom} />
          </div>
        </Router>
        )
    }
}
export default App





  
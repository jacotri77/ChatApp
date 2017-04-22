import React, { Component } from 'react'
import './index.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from '../login'
import ChatRoom from '../chatRoom'

class App extends Component {
  constructor(props){
    super()
    this.state = {
      users: [], 
      messages:[], 
      text: ''
    }
  }

  componentDidMount() {
      socket.on('init', this._initialize),
      socket.on('send:message', this._messageRecieve),
      socket.on('user:join', this._userJoined),
      socket.on('user:left', this._userLeft)
  }

  render(){
    return(
        <Router>
          <div>
            <Route exact={true} path="/" component={Login} />
            <MessageFrom />
            <Message />
            <MessageLIst />
          </div>
        </Router>
        )
    }
}
export default App


// <Route path="/chatRoom/" component={ChatRoom} />
  
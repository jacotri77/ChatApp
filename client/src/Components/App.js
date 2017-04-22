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
      text: ''
    }
  }

  initialize = (data) => {
    var {users, name} = data;
      this.setState({users, user: name})
  }

  messageReceive = (message) => {
      var {messages} = this.state
      messages.push(message)
      this.setState({messages})
  }

  userJoined = (data) => {
      var {users, messages} = this.state
      var {name} = data
      users.push(name)
      messages.push({
          user: 'APPLICATION BOT',
          text : name +' Joined'
      })
      this.setState({users, messages})
  }

  userLeft = (data) =>{
      var {users, messages} = this.state
      var {name} = data
      var index = users.indexOf(name)
      users.splice(index, 1)
      messages.push({
          user: 'APPLICATION BOT',
          text : name +' Left'
      })
      this.setState(
        {users, messages})
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



  
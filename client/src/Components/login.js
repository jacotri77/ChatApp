import React, { Component } from 'react'
import '../index.css'
import { addUser} from '../api/messaging'

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
        username: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
     addUser(this.state.user)
        this.setState({
          username:''
        })

    this.props.history.push('/chatroom/')
  }

render(){
    return(
        <div className="users">
            <h1> Throw In A Nickname to Get to the Chatrooms</h1>
            <form onSubmit={this.handleSubmit}>
              <input onChange={this.handleChange} name="user" type="text" value={this.state.user} placeholder="Username" autoComplete="off" maxLength='14' /><br />
              <button type="submit">Login</button>
            </form>
        </div>
     
        )
    }
}

export default Login


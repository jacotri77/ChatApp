import React, { Component } from 'react'
import '../index.css'
import {connect} from 'react-redux'
import { addUser} from '../api/messaging'

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            user: ""
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

    console.log(this.state)
    this.setState({
      user:''
    })

    this.props.history.push('/chatroom/')
  }

render(){
    return(
        <div className="users">
            <h1> Please Provide Your Username </h1>
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} name="user" type="text" value={this.state.user} placeholder="Username" autoComplete="off" maxLength='14' /><br />
                <button type="submit">Login</button>
            </form>
        </div>
     
        )
    }
}
const mapStateToProps = function(appState) {
  return {
    users: appState.users
  }
}

export default connect(mapStateToProps)(Login)


import React, { Component } from 'react'
import '../index.css'
import { addMessage } from '../api/messaging'
import {connect} from 'react-redux'

class ChatRoom extends Component{
    
constructor(props) {
    super(props)
      this.state = {
        message: ''
    }
  }

  brokeBack = (e) => {
    e.preventDefault()
      this.props.history.goBack()
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    addMessage(this.state.message)
      this.setState({
        message:''
        
    })
  }

  render() {
    return (
      <div className="users">
      <button onClick={this.brokeBack}>Login Page</button>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} name="message" placeholder="Send a message..." value={this.state.message} autoComplete="off" />
          <button type="submit">Send</button>
        </form>
        <div id="messages">
          <ul>
            {this.props.messages.map((message, i)=>(
              <li key={'message' + i}>{message}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = function(appState) {
  return {
    messages: appState.messages
  }
}

export default connect(mapStateToProps)(ChatRoom)
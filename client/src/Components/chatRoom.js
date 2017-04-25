import React, { Component } from 'react'
import '../index.css'
import { addMessage } from '../api/messaging'
import LeftNav from './leftnav'
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

  // componentWillReceiveProps(e) {
  //   if (!this.props.username) {
  //     this.props.history.push('/')
  //   }
  // }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    addMessage({
      message: this.state.message,
      username: this.props.username,
      userId: this.props.userId
    })
      this.setState({
        message:'',
      })
   }

  render() {
    return (
      <div>
      <LeftNav />
      <div className="chats">
      
      <button onClick={this.brokeBack}>Login Page</button>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} name="message" placeholder="Send a message..." value={this.state.message} autoComplete="off" />
          <button type="submit">Send</button>
        </form>
        <div id="messages">
          <ul>
            {this.props.messages.map((message, i)=>(
              <li key={'message' + i}>{message.username + ' ' + message.message + ' ' + message.timestamp}</li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    )
  }
}

const mapStateToProps = function(appState) {
  return {
    username: appState.username,
    messages: appState.messages,
    userId: appState.userId
  }
}

export default connect(mapStateToProps)(ChatRoom)
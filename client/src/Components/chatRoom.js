import React, { Component } from 'react'
import '../index.css'
import { addMessage } from '../api/messaging'
import LeftNav from './leftnav'
import {connect} from 'react-redux'
const moment = require('moment')

class ChatRoom extends Component{
  constructor(){
    super()
    this.state ={
      message: ''
    }
  }

  brokeBack = (e) => {
    e.preventDefault()
      this.props.history.goBack()
  }

  componentWillMount() {
    if (!this.props.username) {
      this.props.history.push('/')
    }
}

  handleChange = (e) =>{
    this.setState({
    [e.target.name] : e.target.value

    })

  }

  handleSubmit = (e) =>{
    e.preventDefault()
    addMessage ({
      message: this.state.message,
      username: this.props.username,
      timestamp: moment().format('LTS')

    })
    this.setState({
      message: ''
    })
  }

  componentWillUpdate() {
        var node = this.refs.messages
        this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight
    }

    componentDidUpdate() {
        if (this.shouldScrollBottom) {
            var node = this.refs.messages
            node.scrollTop = node.scrollHeight
        }
    }

  render(){
    return (
      <div className='room'>
        <LeftNav />
        <div className="messagesContainer" ref="messages">
          <ul className="message">
          {this.props.messages.map((message, i)=>(
              <li key={'message' + i}>{message.username + ' ' + message.message + ' ' +message.timestamp}</li>
            ))}
          </ul>
        </div>
        <div className="formContainer">
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} name="message" placeholder="Message in the room" value={this.state.message} />
          </form>
        </div>
      </div>

    )
  }

}
const mapStateToProps= function(appState) {
  return {
    messages: appState.messages,
    username: appState.username
  } 
}
export default connect(mapStateToProps)(ChatRoom)
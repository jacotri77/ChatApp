import React, { Component } from 'react'
import '../index.css'
import { addMessage } from '../api/messaging'
import LeftNav from './leftnav'
import {connect} from 'react-redux'
import Avatar from 'material-ui/Avatar'
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
      <div>
      <LeftNav />
      <div className='roomContainer'>
        <ul className='userList'>
          {this.props.messages.map((message, i)=>{
            return(
          
            <li id="activeUser" key={'message' + i}>{message.username}</li>
            )})}
          </ul>
        <div className="notesContainer" ref="messages">
          <ul className="message">
          {this.props.messages.map((message, i)=>(
              <li key={'message' + i} id="messageLi"> <Avatar size={40}>{message.username.toUpperCase()}</Avatar>{'  ' + message.message + '   ' +message.timestamp}</li>
            ))}
          </ul>
        </div>
        <div className="formz">
          <form onSubmit={this.handleSubmit}>
            <input type="text" id="formInput" onChange={this.handleChange} name="message" placeholder="Message in the room" value={this.state.message} />
          </form>
        </div>
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
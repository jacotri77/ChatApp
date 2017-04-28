import React, { Component } from 'react'
import '../index.css'
import { addMessage } from '../api/messaging'
import {connect} from 'react-redux'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'



const moment = require('moment')
const styles ={
  customWidth:{
    width:'85%',
    underlineStyle: '2px solid #BBCDE5',
  },
}


class ChatRoom extends Component{
  constructor(){
    super()
    this.state ={
      message: ''
    }
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

    handleMenu = (event, index, value) => this.setState({value})

  render(){
    return (
      <div>
        <div className="activeUsers">
          <h3> Active Users</h3>   
            <DropDownMenu value={this.state.value} onChange={this.handleMenu} openImmediately={false}>
                  <ul className='userList'>
                    {this.props.messages.map((message, i)=>{
                      return(
                        <MenuItem value={1} style={styles.customWidth} primaryText={message.username} />
                      )})}
                  </ul>
              </DropDownMenu>     
        </div>
        <div id="chatRoomHeader">
          <h3>Welcome {this.props.username} to Thunderdome!</h3>
          <ul>
            <li><i className="fa fa-cog fa-2x" aria-hidden="true"></i></li>
            <li><i className="fa fa-user fa-2x" aria-hidden="true"></i></li>  
          </ul>
        </div>
      <div className='roomContainer'>
          <div className="notesContainer" ref="messages">
              <ul className="message">
                {this.props.messages.map((message, i)=>(
                  <li key={'message' + i} id="messageLi">{message.username + '  ' + message.message + '   ' +message.timestamp}</li>
                  ))}
              </ul>
            </div>
           <div className="formz">
              <form onSubmit={this.handleSubmit}>
                <input type="text" id="formInput" onChange={this.handleChange} name="message" placeholder="Send a message to the room" value={this.state.message} autoComplete="off"/>
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


// <ul className='userList'>
      //     {this.props.messages.map((message, i)=>{
      //       return(
      //       <li id="activeUser" key={'message' + i}>{message.username}</li>
      //       )})}
      //     </ul>
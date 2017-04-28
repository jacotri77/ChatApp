import React, { Component } from 'react'
import '../index.css'
import { addMessage } from '../api/messaging'
import {connect} from 'react-redux'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'



const moment = require('moment')
const usernameId = []
const styles ={
  customWidth:{
    width:'85%',

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
            <DropDownMenu value={this.state.value} onChange={this.handleMenu} openImmediately={false} style={styles.customWidth} underlineStyle={{borderColor:'#BBCDE5'}} listStyle={{backgroundColor:'#BBCDE5', color:'#222222'}}>
                  <ul className='userList'>
                    {this.props.messages.map((message, i)=>{
                      return(
                        <MenuItem value={1} key={'message' + i} primaryText={message.username}   />
                      )})}
                  </ul>
              </DropDownMenu>     
        </div>
        <div id="chatRoomHeader">
          <h3>Welcome {this.props.username} to Thunderdome!</h3>
          <ul>
            <li><a href='http://harleydavidson.com'><i className="fa fa-cog fa-2x" aria-hidden="true"></i></a></li>
            <li><a href='http://people.com'><i className="fa fa-user fa-2x" aria-hidden="true"></i></a></li>  
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
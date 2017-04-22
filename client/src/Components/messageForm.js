import React, { Component } from 'react'
import '../index.css'
import {connect} from 'react-redux'
import { AddMessage} from '../api/messaging'
 
class MessageForm extends Component{
    constructor(props){
        super()
        this.state = {
           text: ''
        }
    }
 handleSubmit = (e) => {
    e.preventDefault()
    AddMessage(this.state.text)
    this.setState({
      text:''
    })
  }
//   handleSubmit = (e) => {
//       e.preventDefault();
//       var message = {
//           user : this.props.user,
//           text : this.state.text
//       }
//       this.props.onMessageSubmit(message); 
//       this.setState({ text: '' });
//   }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
      return(
          <div className='message_form'>
              <h3>Write New Message</h3>
              <form onSubmit={this.handleSubmit}>
                  <input
                      onChange={this.handleChange}
                      value={this.state.text}
                  />
              </form>
          </div>
      )
  }
}
const mapStateToProps = function(appState) {
  return {
    text: appState.text
  }
}

export default connect(mapStateToProps)(MessageForm)


import React, { Component } from 'react'
import '../index.css'
import {connect} from 'react-redux'

class Message extends Component{
  render() {
      return (
          <div className="message">
              <strong>{this.props.user} :</strong> 
              <span>{this.props.text}</span>        
          </div>
      );
  }
}

export default Message
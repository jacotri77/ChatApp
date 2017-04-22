import React, { Component } from 'react'
import '../index.css'
import Message from './message'
import {connect} from 'react-redux'

class MessageList extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            messages: [],
        }
   
        
    }
  render() {  
      return (
          <div className='messages'>
              <h2> Conversation: </h2>
                 {
                  this.props.message.map((message, i) => {
                      return (
                          <Message
                              key={i}
                              user={message.user}
                              text={message.text}
                          />
                      );
                  })
              }
           
          </div>
      );
  }
}
const mapStateToProps = function(appState) {
  return {
    message: appState.messages
  }
}

export default connect(mapStateToProps)(MessageList)



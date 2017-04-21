import React, { Component } from 'react'
import './index.css'


class Login extends Component{
    constructor(props){
      super()
    }
render(){
    return(
        <div className="form">
          <form>
            <h3 className="title">What's your nickname?</h3>
            <input className="usernameInput" type="text" maxLength="35" />
          </form>
        </div>
     
        )
    }
}

export default Login

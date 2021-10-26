import React from "react"

import Entry from "./entry"

class Welcome extends React.Component {
    constructor(props) {
      super(props)
      this.state = {page: 0}
      this.handleSignup = this.handleSignup.bind(this);
      this.handleLogin = this.handleLogin.bind(this);
      this.onSuccess = this.onSuccess.bind(this)
    }
    handleSignup() {
      this.setState({
        page: 1
      })
    }
    handleLogin() {
      this.setState({
        page: 2
      })
    }
    onSuccess() {
      this.setState(function(state, props){
        if (state.page == 1){
          state.page = 2
          return state
        }
        if(state.page == 2){
          this.props.onLogin()
          return state
        }
      })
    }


    render() {
      let element = (
        <div>
          <a href="#" onClick={this.handleSignup}>Signup</a>
          <br/>
          <a href="#" onClick={this.handleLogin}>Login</a>
        </div>
      )
      if (this.state.page == 1){
        element = <Entry type="signup" onSuccess={this.onSuccess}/>
      }
      else if (this.state.page == 2) {
        element = <Entry type="login" onSuccess={this.onSuccess}/>
      }
      return element
    }
  }

export default Welcome
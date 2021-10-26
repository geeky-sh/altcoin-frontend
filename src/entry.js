import React from "react"
import APIService from "./api_service"
class Entry extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        username: "",
        password: ""
      }
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleUsernameChange = this.handleUsernameChange.bind(this)
      this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }

    handleUsernameChange(event) {
      this.setState({
        username: event.target.value
      })
    }

    handlePasswordChange(event) {
      this.setState({
        password: event.target.value
      })
    }

    handleSubmit(e) {
      e.preventDefault()
      var uri = this.props.type == "signup" ? "signup" : "login"
      let body = {username: this.state.username, password: this.state.password}
      let pthis = this
      APIService.custom_request("POST", uri, false, body).then(function(response){
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("something wrong happened")
        }
      }).then(
        function(data){
          pthis.props.onSuccess()
          if (uri == "login"){
            localStorage.setItem('token', data.token)
          }
        }
      ).catch(function(error){
        alert(error)
      })
    }

    render() {
      return (
        <div>
          <h1>{this.props.type} form</h1>
          <form onSubmit={this.handleSubmit}>
            <label for="username">username</label>
            <input type="text" id="username" name="username"
                  value={this.state.username} onChange={this.handleUsernameChange}/>
            <br/>
            <label for="password">password</label>
            <input type="text" id="password" name="password "
                  value={this.state.password} onChange={this.handlePasswordChange}/>
            <br/>

            <input type="submit" value="Submit"/>
          </form>
        </div>
      )
    }
  }

export default Entry
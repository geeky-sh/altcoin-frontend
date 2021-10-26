import React from "react"
import Transaction from "./transaction"
import APIService from "./api_service"

class Wallet extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        username: '',
        bitcoin_amount: 0,
        wallet_amount: 0,
      }
      this.refreshUser = this.refreshUser.bind(this)
    }
    componentDidMount() {
      this.refreshUser()
    }
    refreshUser() {
      APIService.custom_request("GET", "user", true).then(
        response => response.json()).then(data => this.setState(data))
    }
    render() {
      return (
        <div>
        <p>Username</p>
        <p>{this.state.username}</p>
        <p>Bitcoin Amount</p>
        <p>{this.state.bitcoin_amount}</p>
        <p>Wallet Amount</p>
        <p>{this.state.wallet_amount}</p>
        <Transaction refreshUser={this.refreshUser}/>
        </div>
      )
    }
  }

  export default Wallet
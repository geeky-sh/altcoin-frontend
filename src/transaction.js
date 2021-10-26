import React from "react"
import APIService from "./api_service"

class Transaction extends React.Component {
    constructor(props) {
      super(props)
      this.state = {bitcoin_amount: 1, bitcoin_value: -1, bitcoin_price: -1}
      this.handleClick = this.handleClick.bind(this)
      this.handleAmountChange = this.handleAmountChange.bind(this)
    }

    componentDidMount() {
      // commennted code not working
      // let pthis = this
      //   fetch("https://api.coincap.io/v2/rates/bitcoin").then(
      //     response => response.json()).then(data => pthis.setState({bitcoin_price: parseFloat(data.data.rateUsd)}))
      //   this.setState((state, _props) => ({bitcoin_value: state.bitcoin_amount * state.bitcoin_price}))
      this.setState({
        bitcoin_price: 10000,
        bitcoin_value: 10000
      })
    }

    handleAmountChange(event) {
      this.setState((state, props) => ({
        bitcoin_amount: parseFloat(event.target.value),
        bitcoin_value: parseFloat(event.target.value) * state.bitcoin_price
      }))
    }
    handleClick(event) {
      let uri = event.target.value
      let body = {bitcoin_amount: this.state.bitcoin_amount, bitcoin_value: this.state.bitcoin_value}
      APIService.custom_request("POST", uri, true, body).then(function(response){
        if(response.ok){
          return response.json()
        } else {
          throw new Error("Error")
        }
      }).then(data => this.props.refreshUser()).catch(function(err){
        alert(err)
      })
    }
    render() {
      return (
        <form>
          <label for="bitcoin_amount">bitcoin_amount</label>
          <input type="number" step="0.01" name="bitcoin_amount" value={this.state.bitcoin_amount}
                onChange={this.handleAmountChange}/>
          <br/>
          <label for="bitcoin_value">bitcoin_value</label>
          <input type="number" name="bitcoin_value" value={this.state.bitcoin_value} readOnly={true}/>
          <br/>

          <input type="button" value="buy" onClick={this.handleClick}/>
          <input type="button" value="sell" onClick={this.handleClick}/>
        </form>
      )
    }
  }

export default Transaction
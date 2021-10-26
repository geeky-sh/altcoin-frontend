import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Welcome from './welcome';
import Wallet from './wallet';

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: Boolean(localStorage.getItem('token'))
    }
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogin() {
    this.setState({
      isLoggedIn: true
    })
  }

  handleLogout() {
    this.setState({
      isLoggedIn: false
    })
  }


  render() {
    let element = <Welcome onLogin={this.handleLogin}/>
    if (this.state.isLoggedIn) {
      element = <Wallet onLogout={this.handleLogout}/>
    }
    return element
  }
}

ReactDOM.render(
  <Index/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

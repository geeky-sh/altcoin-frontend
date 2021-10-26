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
      isLoggedIn: false
    }
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin() {
    this.setState({
      isLoggedIn: true
    })
  }

  render() {
    let element = <Welcome onLogin={this.handleLogin}/>
    if (this.state.isLoggedIn) {
      element = <Wallet/>
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

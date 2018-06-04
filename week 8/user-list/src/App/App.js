import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Footer from './partials/Footer';
import Userlist from './users/Userlist';
import dataServices from "./services/dataServices";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Users</h1>
        </header>
        <Userlist users={dataServices.getUser()} />
        <Footer />
      </div>
    );
  }
}

export default App;

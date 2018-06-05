import React, { Component } from 'react';
import './App.css';
import Header from './partials/Header';
import Footer from './partials/Footer';
import Userlist from './users/Userlist';
import dataServices from "./services/dataServices";
import SearchBox from './partials/SearchBox';
// import Counter from "./users/usersCounter";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: true,
      users: []
    }
  }
  handleClick = () => {
    this.setState((prevState, props) => {
      return {
        display: !prevState.display
      }
    })
  }
  loadUsers() {
    return dataServices.getUser().then(data => {
      this.setState({
        users: data
      })
    })
  }
  componentDidMount() {//cemu sluzi ova
    this.loadUsers()
  }
  refreshPage = () => { //zasto smo pravili ovu funckiju vise???
    this.loadUsers()
  }

  

  render() {
    return (
      <div className="App">
        <Header handler={this.handleClick} display={this.state.display} refresh={this.refreshPage} />
        <SearchBox />
        {/* <Counter users={this.state.users} /> */}
        <Userlist selected={this.state.display} users={this.state.users} />
        <Footer />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Header from './partials/Header';
import Footer from './partials/Footer';
import Userlist from './users/Userlist';
import dataServices from "./services/dataServices";
import SearchBox from './partials/SearchBox';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      display: true,
      users: []
    }
  }
  handleClick = ()=>{
    this.setState((prevState, props) => {
      return {
          display: !prevState.display
      }
    })
  }
  loadUsers(){
    return dataServices.getUser().then(data=>{
      this.setState({
          users: data
      })
    })
  }
  componentDidMount(){
    this.loadUsers()
  }
  refreshPage = () => {
    this.loadUsers()
  }

  render() {
    return (
      <div className="App">
        <Header handler={this.handleClick} display={this.state.display} refresh={this.refreshPage}/>
        <SearchBox />
        {/* <Counter /> */}
        <Userlist selected={this.state.display} users={this.state.users}/>
        <Footer />
      </div>
    );
  }
}

export default App;

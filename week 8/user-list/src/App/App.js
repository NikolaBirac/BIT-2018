import React, { Component } from 'react';
import './App.css';
import Header from './partials/Header';
import Footer from './partials/Footer';
import Userlist from './users/Userlist';
import dataServices from "./services/dataServices";
import SearchBox from './partials/SearchBox';
import Counter from "./users/UsersCounter";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCardView: false,
      users: [],
      date: new Date()
    }
  }
  handleClick = () => {
    localStorage.setItem("value", !this.state.isCardView)
    this.setState((prevState, props) => {
      return {
        isCardView: !prevState.isCardView
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
  componentDidMount() {
    this.loadUsers();
    this.refreshLocalStorage();
  }
  refreshPage = () => {
    this.setState(() => {
      return {
        date: new Date()
      }
    })
    localStorage.setItem('currentDate', this.state.date);
    this.loadUsers()
  }
  refreshLocalStorage() {
    const isCardViewFromStorage = localStorage.getItem('value');

    if (isCardViewFromStorage != undefined) {
      const isCardView = JSON.parse(isCardViewFromStorage);
      this.state.isCardView = isCardView;
    }
  }
  search = (searchText) => {
    this.setState({
      searchText: searchText
    })
  }


  render() {
    return (
      <div className="App">
        <Header handler={this.handleClick} isCardView={this.state.isCardView} refresh={this.refreshPage} />
        <SearchBox search={this.search} />
        <Userlist isCardView={this.state.isCardView} users={this.state.users} searchText={this.state.searchText} />
        <Footer currentDate={this.state.date}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Header from '../partials/header/Header';
import Footer from "../partials/footer/Footer";
import Home from "./home/HomePage";
import Authors from "./authors/AuthorsPage";
import About from "./about/AboutPage";
import Details from "./singlePost/SinglePostPage";
import AuthorProfile from "./singleAuthor/AuthorProfilePage";
import { Switch, Route, Redirect} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App container">
        <Header />
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/authors" component={Authors}/> 
          <Route path="/about" component={About}/> 
          <Route path="/details" component={Details}/>    
          <Route path="/authors/1" component={AuthorProfile}/>    
          <Redirect from="/" to="/home"/>         
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

import axios from "axios";
import { HashRouter, BrowserRouter, Route, Switch, NavLink, Redirect} from "react-router-dom";

import SearchForm from "./components/SearchForm";
import ListPictures from "./components/ListPictures";

import Search from "./components/Search";
import Cats from "./components/Cats";
import Dogs from "./components/Dogs";
import Computers from "./components/Computers";
import My404Component from "./components/My404Component";

import apiKey from "./config.js";

class App extends Component {

  constructor() {
    super();
    this.state = {
      imageSerched: [],
      imageCats: [],
      imageDogs: [],
      imageComputers: [],
      loaded: false
    };
  }

  componentDidMount() { // immediaty called after that the component is invoked.
    this.callingAPI();
    this.callingAPIComputers();
    this.callingAPIDogs();
    this.callingAPICats();
  }

  callingAPI = (tags="sun", key={apiKey}.apiKey) => {
    this.setState({loaded: false});
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${tags}&per_page=20&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          imageSerched: response.data.photos.photo,
          loaded: true
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  callingAPICats = (tags="cats", key={apiKey}.apiKey) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${tags}&per_page=20&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          imageCats: response.data.photos.photo
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  callingAPIDogs = (tags="dogs", key={apiKey}.apiKey) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${tags}&per_page=20&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          imageDogs: response.data.photos.photo
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  callingAPIComputers = (tags="computers", key={apiKey}.apiKey) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${tags}&per_page=20&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          imageComputers: response.data.photos.photo
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }


  render() {
    return (
      <HashRouter>
      <div className="App">
        <div className="container">
          <div className="nav-menu-content">
            <Route exact path="/" component={() => <Redirect to="/search"/>} />
            <Route exact path="/search" render= { () => <SearchForm onSearch={this.callingAPI}/>} />
            <nav className="main-nav">
              <ul>
                <li> <NavLink to='/search/cats'>Cats</NavLink> </li>
                <li> <NavLink to='/search/dogs'>Dogs</NavLink> </li>
                <li> <NavLink to='/search/computers'>Computers</NavLink> </li>
              </ul>
            </nav>
          </div>
          <Switch>
            <Route exact path="/search" render={() => <Search loaded={this.state.loaded} images={this.state.imageSerched} />} />
            <Route exact path="/search/cats" render={() => <Cats images={this.state.imageCats} loaded={this.state.loaded} />} />
            <Route exact path="/search/dogs" render={() => <Dogs images={this.state.imageDogs} loaded={this.state.loaded}/>} />
            <Route exact path="/search/computers" render={() => <Computers images={this.state.imageComputers} loaded={this.state.loaded}/>} />
            <Route exact path='/404' component={My404Component} />
            <Redirect from='/search/*' to='/404' />
          </Switch>
        </div>
      </div>
      </HashRouter>
    );
  }
}

export default App;

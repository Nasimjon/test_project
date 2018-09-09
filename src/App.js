import React, { Component } from 'react';
import Header from './components/headerComponent/header';
import Homepage from './components/pages/homePage';
import Services from './components/pages/services';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';


import './App.css';
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/Services" component={Services} />
        
        </div>
      </Router>
    );
  }
}

export default App;

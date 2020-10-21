import React, { Component } from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Anime from 'react-anime'
import 'remixicon/fonts/remixicon.css'
import Home from './components/Home/Home'
import Nav from './components/Nav/Nav';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import DashboardContext from './context/DashboardContext';

class App extends React.Component  {
  static contextType = DashboardContext;
  render() {
    return (
      <div className="App">
        <Anime opacity={[0, 1]}>
        <div className={this.context.overlay ? "overlay" : ''}></div>
        </Anime>
        <Nav/>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    )
  };
}

export default App;

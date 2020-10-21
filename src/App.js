import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import 'remixicon/fonts/remixicon.css'
import Home from './components/Home/Home'
import Nav from './components/Nav/Nav';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    
    </div>
  );
}

export default App;

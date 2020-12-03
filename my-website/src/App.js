import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import More from './components/More';

const dotenv = require('dotenv').config()

function App() {

  return (
    <Router>
      <Route path='/' exact component={Home} />
      <Route path='/about' exact component={About} />
      <Route path='/more' exact component={More} />
    </Router>
  );
  
}

export default App;

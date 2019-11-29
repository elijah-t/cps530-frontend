import React, { Component } from 'react';
import { BrowserRouter as Router, Route }  from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar.js'

import Home from './pages/Home.jsx'
import Install from './pages/Install.jsx'
import Tutorial from './pages/Tutorial.jsx'
import Conclusion from './pages/Conclusion.jsx'
import Credits from './pages/Credits.jsx'

class App extends Component {
  render(){
    return(
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path="/install" component={Install} />
          <Route path="/tutorial" component={Tutorial} />
          <Route path="/conclusion" component={Conclusion} />
          <Route path="/credits" component={Credits} />
        </div>
      </Router>
    );
  }
}

export default App;

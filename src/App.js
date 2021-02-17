import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';

//class App extends Component {
//  render() {
//    return (
//      <div>
//        <Navbar/>
//      </div>
//    );
//  }
//}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/proyecto-comunicacion" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/work" component={Work}/>
             <Route path="/contact" component={Contact}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;

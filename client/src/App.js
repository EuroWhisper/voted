import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import NewUserGreeting from './components/new-user-greeting/NewUserGreeting';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <div className="sheet container">
        <NewUserGreeting />
          {/* <Route exact path="/" component={} /> */}
        
      </div>
      </Router>
    </div>
  );
}

export default App;

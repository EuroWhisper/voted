import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Modal from './components/modal/Modal';
import Navbar from './components/navbar/Navbar';
import PollList from './components/poll-list/PollList';
import NewUserGreeting from './components/new-user-greeting/NewUserGreeting';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Modal></Modal>
        <Router>
        <Navbar />
        <div className="sheet container">
          <NewUserGreeting />
            <Route exact path="/" render={() => <PollList category="all" /> } />
          
        </div>
        </Router>
      </div>
    );
  }
}

export default App;

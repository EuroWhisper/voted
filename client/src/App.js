import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Modal from './components/modal/Modal';
import Navbar from './components/navbar/Navbar';
import PollList from './components/poll-list/PollList';
import NewUserGreeting from './components/new-user-greeting/NewUserGreeting';
import Footer from './components/footer/Footer';
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
            <Route exact path="/movies" render={() => <PollList category="movies" /> } />
            <Route exact path="/television" render={() => <PollList category="television" /> } />
            <Route exact path="/music" render={() => <PollList category="music" /> } />
            <Route exact path="/gaming" render={() => <PollList category="gaming" /> } />
            <Route exact path="/sports" render={() => <PollList category="sports" /> } />
            <Route exact path="/culture" render={() => <PollList category="culture" /> } />
            <Route exact path="/politics" render={() => <PollList category="politics" /> } />
        </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;

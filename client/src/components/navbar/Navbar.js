import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navigation-bar">
                <div className="container">
                    <div className="navigation-bar-inner">
                        <div className="navbar-logo">
                            
                        </div>
                        <div className="navbar-menu-wrapper">
                            <h1>Voted</h1>
                            <ul className="navbar-menu">
                                <li>Vote on:</li>
                                <li><Link to="/movies">Movies</Link></li>
                                <li><Link to="/television">Television</Link></li>
                                <li><Link to="/music">Music</Link></li>
                                <li><Link to="/gaming">Gaming</Link></li>
                                <li><Link to="/sport">Sport</Link></li>
                                <li><Link to="/culture">Culture</Link></li>
                                <li><Link to="/politics">Politics</Link></li>
                            </ul>
                        </div>
                        <button className="submit-poll-button">Submit Poll</button>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
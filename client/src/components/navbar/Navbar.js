import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './navbar.css';
import {showAddPollModal} from '../../actions/index';
import {showMobileMenu, hideMobileMenu} from '../../mobile-menu';

class Navbar extends React.Component {
    state = {
        mobileMenuVisible: false
    }

    toggleMobileMenu() {
        if (this.state.mobileMenuVisible) {
            hideMobileMenu();
            this.setState({mobileMenuVisible: false});
        } else {
            showMobileMenu();
            this.setState({mobileMenuVisible: true});
        }
    }

    render() {
        return (
            <nav className="navigation-bar">
                <div className="container">
                    <div className="navigation-bar-inner">
                        <div className="branding">
                        <Link to="/" className="brand"><div className="navbar-logo">
                                
                            </div></Link>
                            <Link to="/" className="brand"><h1>Voted</h1></Link>

                        </div>
                        <div className="burger-menu"  onClick={() => {this.toggleMobileMenu();}}>
                            <div className="line-1"></div>
                            <div className="line-2"></div>
                            <div className="line-3"></div>
                        </div>
                        
                            
                            <ul className="navbar-menu">
                                <li><Link to="/movies">Movies</Link></li>
                                <li><Link to="/television">Television</Link></li>
                                <li><Link to="/music">Music</Link></li>
                                <li><Link to="/gaming">Gaming</Link></li>
                                <li><Link to="/sports">Sports</Link></li>
                                <li><Link to="/culture">Culture</Link></li>
                                <li><Link to="/politics">Politics</Link></li>
                                <li><button className="submit-poll-button" onClick={() => {this.props.showAddPollModal();}}>Submit Poll</button></li>
                            </ul>
                        
                    </div>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = function(state) {
    return {
        modalType: state.modalType
    };
};

export default connect(mapStateToProps, {showAddPollModal: showAddPollModal})(Navbar);
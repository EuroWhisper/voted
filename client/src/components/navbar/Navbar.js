import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './navbar.css';
import {showAddPollModal} from '../../actions/index';
import {toggleMobileMenu} from '../../mobile-menu';

class Navbar extends React.Component {
    state = {
        mobileMenuVisible: false
    }

    onLinkClick(e) {
        // 1. Retrieve the menu items from the nav menu.
        const menuItems = document.querySelector('#navbar-menu').children;
        // 2. For each menu item (except the submit poll item), color its a element the default color.
        Array.from(menuItems).forEach(menuItem => {
            if (menuItem.id !== "submit-poll-item") {
                let link = menuItem.firstChild;
                link.style.color = '#B2CFFF';
            }
        });
        // 3. Retrieve the a element that was clicked and color it the active color.
        const activeLink = e.target;
        activeLink.style.color = 'white';
        // 4. Hide the mobile menu.
        toggleMobileMenu();
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
                        <div className="burger-menu"  onClick={toggleMobileMenu}>
                            <div className="line-1"></div>
                            <div className="line-2"></div>
                            <div className="line-3"></div>
                        </div>
                        
                            
                            <ul id="navbar-menu" className="navbar-menu">
                                <li><Link to="/movies" onClick={(e) => {this.onLinkClick(e);}}>Movies</Link></li>
                                <li><Link to="/television" onClick={(e) => {this.onLinkClick(e);}}>Television</Link></li>
                                <li><Link to="/music" onClick={(e) => {this.onLinkClick(e);}}>Music</Link></li>
                                <li><Link to="/gaming" onClick={(e) => {this.onLinkClick(e);}}>Gaming</Link></li>
                                <li><Link to="/sports" onClick={(e) => {this.onLinkClick(e);}}>Sports</Link></li>
                                <li><Link to="/culture" onClick={(e) => {this.onLinkClick(e);}}>Culture</Link></li>
                                <li><Link to="/politics" onClick={(e) => {this.onLinkClick(e);}}>Politics</Link></li>
                                <li id="submit-poll-item"><button className="submit-poll-button" onClick={() => {this.props.showAddPollModal();}}>Submit Poll</button></li>
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
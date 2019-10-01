import React from 'react';
import './new-user-greeting.css';

class NewUserGreeting extends React.Component {
    state = {
        returningVisitor: null
    };

    isNewUser() {
        return (window.localStorage.getItem("returning visitor") === null);
    }

    markVisited() {
        window.localStorage.setItem("returning visitor", "returning visitor");
    }

    renderGreeting() {
        if (this.isNewUser()) {
            this.markVisited();
            return (
                <section className="new-user-greeting-box">
                    <div className="greeting-inner">
                        <div className="greeting-message">
                            <h2>Welcome to Voted!</h2>
                            <h3>Anonymously vote for the things you like.</h3>
                        </div>
                        
                    </div>
                </section>
            );
        }
        return null;
    }

    render() {
        return this.renderGreeting();
    }
}

export default NewUserGreeting;
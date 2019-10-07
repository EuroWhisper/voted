import React from 'react';
import './new-user-greeting.css';

class NewUserGreeting extends React.Component {
    state = {
        returningVisitor: null
    };

    // Determine whether or not this is the user's first time visiting the site.
    isNewUser() {
        return (window.localStorage.getItem("returning visitor") === null);
    }

    // Make a record of the user having visited the site (there has to be a better way to do this).
    markVisited() {
        window.localStorage.setItem("returning visitor", "returning visitor");
    }

    // Render the greeting message.
    renderGreeting() {
        // If user is new, render greeting.
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
        // If user is not new, don't render anything.
        return null;
    }

    render() {
        return this.renderGreeting();
    }
}

export default NewUserGreeting;
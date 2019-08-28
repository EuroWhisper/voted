import React from 'react';
import './new-user-greeting.css';

class NewUserGreeting extends React.Component {
    render() {
        return (
            <section className="new-user-greeting-box">
                <div className="greeting-inner">
                    <div className="greeting-message">
                        <h1>Welcome to Voted!</h1>
                        <h2>Anonymously vote for the things you like.</h2>
                    </div>
                    
                </div>
            </section>
        );
    }
}

export default NewUserGreeting;
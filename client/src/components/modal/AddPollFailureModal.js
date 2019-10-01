import React from 'react';
import './add-poll-failure-modal.css';

class AddPollFailureModal extends React.Component {
    render() {
        return (
            <div className="add-poll-failure-modal">
                <h2>Uh oh!</h2>
                <p>Your poll could not be added. Please try again later.</p>
            </div>
        );
    }
}

export default AddPollFailureModal;
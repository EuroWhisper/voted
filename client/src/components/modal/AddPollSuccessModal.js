import React from 'react';
import './add-poll-success-modal.css';

class AddPollSuccessModal extends React.Component {
    render() {
        return (
            <div className="add-poll-success-modal">
                <h2>Success!</h2>
                <p>Your poll has been added successfully.</p>
            </div>
        );
    }
}

export default AddPollSuccessModal;
import React from 'react';
import './loading-polls-modal.css';

class LoadingPollsModal extends React.Component {
    render() {
        return (
            <div className="loading-polls-modal">
                <h2>Loading Polls</h2>
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                <p>Please wait while the polls are retrieved.</p>
            </div>
        );
    }
}

export default LoadingPollsModal;
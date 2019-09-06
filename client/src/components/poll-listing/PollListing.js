import React from 'react';
import './poll-listing.css';

class PollListing extends React.Component {
    renderOptions() {
        const options = this.props.poll.options;

        const optionsElements = options.map((option) => {
            return (<div className="poll-option">
                <input type="checkbox" />
                <h3>{option.description}</h3>
            </div>);
        });

        return optionsElements;
    }

    render() {
        return (
            <div className="poll-listing">
                <h2>{this.props.poll.question}</h2>
                {this.renderOptions()}
            </div>
        );
    }
}

export default PollListing;
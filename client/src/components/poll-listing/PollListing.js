import React from 'react';
import './poll-listing.css';
import {addVote} from '../../actions/index';
import { connect } from 'react-redux';

class PollListing extends React.Component {
    renderOptions() {
        const options = this.props.poll.options;
        // console.log(this.props.poll);
        const optionsElements = options.map((option, index) => {
            return (<div className="poll-option" key={index}>
                <input type="checkbox" onClick={() => {this.props.addVote(this.props.poll._id, index);}} />
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

export default connect(null, {addVote: addVote})(PollListing);
import React from 'react';
import './poll-listing.css';
import {addVote} from '../../actions/index';
import { connect } from 'react-redux';

class PollListing extends React.Component {
    // When mouse hovers over an option
    onOptionHover(e) {
        if (e.target.className === "poll-option") {
            // 1. Get the checkbox that needs to be filled.
            const targetOptionCheckbox = e.target.firstChild;
            // 2. Fill the target checkbox.
            targetOptionCheckbox.style.backgroundColor = "white";
        }
    }

    // When mouse no longer hovers over an option
    onOptionHoverOut(e) {
        let targetOptionCheckbox;
        // 1. Get the checkbox that needs to be filled.
        if (e.target.className === "poll-option") {
            targetOptionCheckbox = e.target.firstChild;
            // 2. Set target checkbox transpernt.
            targetOptionCheckbox.style.backgroundColor = "transparent";
        }
    }

    // Render the voting options.
    renderOptions() {
        // 1. Grab the options array from the poll object.
        const options = this.props.poll.options;

        // 2. Create a template for each voting option for rendering.
        const optionsElements = options.map((option, index) => {
            return (<div className="poll-option" onClick={() => {this.props.addVote(this.props.poll._id, index);}} key={index} onMouseOver={(e) => {this.onOptionHover(e);}} onMouseLeave={(e) => {this.onOptionHoverOut(e);}}>
                <div className="vote-checkbox" onClick={() => {this.props.addVote(this.props.poll._id, index);}}></div>
                <p>{option.description}</p>
            </div>);
        });
        // 3. Return the array of voting option templates.
        return optionsElements;
    }

    // Render the voteable poll listing.
    render() {
        return (
            <div className="poll-listing">
                <h3>{this.props.poll.question}</h3>
                <div className="poll-options">
                    {this.renderOptions()}
                </div>
            </div>
        );
    }
}

export default connect(null, {addVote: addVote})(PollListing);
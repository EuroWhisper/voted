import React from 'react';
import PollListing from '../poll-listing/PollListing';
import PollResult from '../poll-result/PollResult';

class Poll extends React.Component {

    renderPoll() {
        // 1. Determine whether user has already voted on this poll.
        const poll = this.props.poll;
        // True: Render a PollResult component, to display the current result of the poll.
        return <PollResult poll={poll} />;
        // False: Render the poll listing, so that the user can vote on it.
        // return <PollListing poll={poll} />;
    }
    
    render() {
        return this.renderPoll();
    }
};

export default Poll;
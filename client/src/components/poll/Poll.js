import React from 'react';
import PollListing from '../poll-listing/PollListing';
import PollResult from '../poll-result/PollResult';
import {alreadyVoted} from '../../votecheck';

class Poll extends React.Component {

    // Render a poll.
    renderPoll() {
        const poll = this.props.poll;
        // 1. Determine whether user has already voted on this poll.
        if (alreadyVoted(poll._id)) {
            // True: Render a PollResult component, to display the current result of the poll.
            return <PollResult poll={poll} />;
        }
        // False: Render the poll listing, so that the user can vote on it.
         return <PollListing poll={poll} />;
    }
    
    render() {
        return this.renderPoll();
    }
};

export default Poll;
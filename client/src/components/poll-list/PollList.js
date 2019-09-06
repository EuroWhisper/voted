import React from 'react';
import {connect} from 'react-redux';
import Poll from '../poll/Poll';

class PollList extends React.Component {

    renderPolls() {
        const polls = this.props.polls;

        const pollCollection = polls.map((value) => {
            return <Poll poll={value}  />;
        });

        return pollCollection;
    }

    componentDidMount() {
        console.log(this.props.polls);
        // 1. Retrieve selected category name from props.

        // 2. Retrieve all polls belonging to selected category name.
        
    }

    render() {
        return (
            this.renderPolls()
        );
    }
}

const mapStateToProps = function(state) {
    return {
        polls: state.polls
    };
};

export default connect(mapStateToProps)(PollList);
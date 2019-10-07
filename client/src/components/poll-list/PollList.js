import React from 'react';
import {connect} from 'react-redux';
import {setPolls} from '../../actions';
import Poll from '../poll/Poll';
import Axios from '../../axios-config';
import './poll-list.css';

class PollList extends React.Component {

    // Fetch all polls from the database.
    async fetchPolls() {
        try {
            // 1. Fetch the polls from the database.
            const res = await Axios.get('/polls');
            const polls = res.data;
            // 2. Store the polls in the client-side state.
            this.props.setPolls(polls);
        } catch(error) {
            console.log(error);
        }
    }

    // Fetch all polls belonging to a certain category from the database.
    async fetchPollsByCategory(category) {
        try {
            // 1. Fetch all polls belonging to the category.
            const res =  await Axios.get(`/polls/category/${category}`);
            const polls = res.data;
            // 2. Store the polls in the client-side state.
            this.props.setPolls(polls);
        } catch(error) {
            console.log(error);
        }
    }

    // Fetch the necessary polls after mounting.
    componentDidMount() {
        // If selected 'category' is 'all'
        if (this.props.category === "all") {
            // Return all polls regardless of category.
            this.fetchPolls();
        } else {
            // Otherwise, return polls belonging to the selected category.
            this.fetchPollsByCategory(this.props.category);
        }
    }

    // Render the list of polls.
    renderPolls() {
        const polls = this.props.polls;

        // If there is at least 1 poll in the polls array.
        if (polls.length > 0) {
            // Create a Poll component and add it to a list.
            const pollCollection = polls.map((value) => {
                return <Poll key={value._id} poll={value}  />;
            });
    
            return pollCollection;
        }
        // If there are no polls in the polls array, display fetching polls message.
        return <div>Fetching polls</div>;
    }

    render() {
        return (
            <div className="poll-list">
                {this.renderPolls()}
            </div>
        );
    }
}

const mapStateToProps = function(state) {
    return {
        polls: state.polls
    };
};

export default connect(mapStateToProps, {setPolls: setPolls})(PollList);
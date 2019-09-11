import React from 'react';
import {connect} from 'react-redux';
import {setPolls} from '../../actions';
import Poll from '../poll/Poll';
import Axios from '../../axios-config';

class PollList extends React.Component {

    async fetchPolls() {
        try {
            const res = await Axios.get('/polls');
            const polls = res.data;
            this.props.setPolls(polls);
        } catch(error) {
            console.log(error);
        }
    }

    async fetchPollsByCategory(category) {
        try {
            const res =  await Axios.get(`/polls/${category}`);
            const polls = res.data;
            this.props.setPolls(polls);
        } catch(error) {
            console.log(error);
        }
    }

    componentDidMount() {
        if (this.props.category === "all") {
            this.fetchPolls();
        } else {
            this.fetchPollsByCategory(this.props.category);
        }
    }

    renderPolls() {
        const polls = this.props.polls;

        if (polls.length > 0) {
            const pollCollection = polls.map((value) => {
                return <Poll poll={value}  />;
            });
    
            return pollCollection;
        }

        return <div>Fetching polls</div>;
    }

    // componentDidMount() {
    //     console.log(this.props.polls);
    //     // 1. Retrieve selected category name from props.

    //     // 2. Retrieve all polls belonging to selected category name.
        
    // }

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

export default connect(mapStateToProps, {setPolls: setPolls})(PollList);
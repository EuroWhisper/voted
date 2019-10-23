import { SET_POLLS, ADD_POLL, UPDATE_POLL, ADD_VOTE, SHOW_ADD_POLL_MODAL, SHOW_ADD_POLL_SUCCESS_MODAL, SHOW_ADD_POLL_FAILURE_MODAL, SHOW_LOADING_POLLS_MODAL, HIDE_MODAL } from './actiontypes';
import Axios from '../axios-config';
import {setPollVoted} from '../votecheck';

// Populate the list of polls to be shown to the user.
export function setPolls(polls) {
    return {
        type: SET_POLLS,
        payload: polls
    }
};

// Submit poll to database and display it on the client-side.
export function addPoll(poll) {
    return async (dispatch, state) => {
        // 1. Submit poll to the server.
        try {
            let result = await Axios.post('/polls', poll);
            console.log(result);
            // 2. Display poll on client-side.
            dispatch({
                type: ADD_POLL,
                payload: result.data
            });
            // 3. Display success message.
            dispatch(showAddPollSuccessModal());
        } catch (err) {
            // Something went wrong, display failure message.
            dispatch(showAddPollFailureModal());
        }
        
        
    };
}

// Re-render existing poll on the clientside with its updated version.
export function updatePoll(pollID, poll) {
    return {
        type: UPDATE_POLL,
        payload: poll
    };
}

// Increment the vote counter for an option on a given poll.
export function addVote(pollID, optionIndex) {
    return async (dispatch) => {
        // 1. Attempt to send the vote information to the server.
        try {
            let result = await Axios.post('/vote/' + pollID, {optionIndex: optionIndex});
            // 2. Store a record (in local storage) of the user having now voted on this particular poll.
            setPollVoted(pollID);
            // 3. Display the updated poll on the client-side.
            dispatch(updatePoll(pollID, result.data));
        } catch (err) {
            // TODO: Display error message to user.
        }
    };
}

// Display the modal containing the form for adding a new poll.
export function showAddPollModal() {
    return {
        type: SHOW_ADD_POLL_MODAL,
        payload: 'ADD_POLL_MODAL'
    };
}

// Display the modal containing the success message for adding a new poll.
export function showAddPollSuccessModal() {
    return {
        type: SHOW_ADD_POLL_SUCCESS_MODAL,
        payload: 'ADD_POLL_SUCCESS_MODAL'
    };
}

// Display the modal containing the failure message for adding a new poll.
export function showAddPollFailureModal() {
    return {
        type: SHOW_ADD_POLL_FAILURE_MODAL,
        payload: 'ADD_POLL_FAILURE_MODAL'
    };
}

// Display the modal containing the loading spinner for fetching all polls from database.
export function showLoadingPollsModal() {
    return {
        type: SHOW_LOADING_POLLS_MODAL,
        payload: 'LOADING_POLLS_MODAL'
    };
}

// Hide the modals.
export function hideModal() {
    return {
        type: HIDE_MODAL
    };
}
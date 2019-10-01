import { SET_POLLS, ADD_POLL, UPDATE_POLL, ADD_VOTE, SHOW_ADD_POLL_MODAL, SHOW_ADD_POLL_SUCCESS_MODAL, SHOW_ADD_POLL_FAILURE_MODAL, HIDE_MODAL } from './actiontypes';
import Axios from '../axios-config';
import {setPollVoted} from '../votecheck';

export function setPolls(polls) {
    return {
        type: SET_POLLS,
        payload: polls
    }
};

export function addPoll(poll) {
    return async (dispatch, state) => {
        // 1. Submit poll to the server.
        try {
            let result = await Axios.post('/polls', poll);
            console.log(result);
            dispatch({
                type: ADD_POLL,
                payload: result.data
            });
            dispatch(showAddPollSuccessModal());
        } catch (err) {
            dispatch(showAddPollFailureModal());
        }
        
        
    };
}

export function updatePoll(pollID, poll) {
    return {
        type: UPDATE_POLL,
        payload: poll
    };
}

export function addVote(pollID, optionIndex) {
    return async (dispatch) => {
        try {
            let result = await Axios.post('/vote/' + pollID, {optionIndex: optionIndex});
            setPollVoted(pollID);
            dispatch(updatePoll(pollID, result.data));
            console.log(result.data);
        } catch (err) {
            console.log(err);
        }
    };
}

export function showAddPollModal() {
    return {
        type: SHOW_ADD_POLL_MODAL,
        payload: 'ADD_POLL_MODAL'
    };
}

export function showAddPollSuccessModal() {
    return {
        type: SHOW_ADD_POLL_SUCCESS_MODAL,
        payload: 'ADD_POLL_SUCCESS_MODAL'
    };
}

export function showAddPollFailureModal() {
    return {
        type: SHOW_ADD_POLL_FAILURE_MODAL,
        payload: 'ADD_POLL_FAILURE_MODAL'
    };
}

export function hideModal() {
    return {
        type: HIDE_MODAL
    };
}
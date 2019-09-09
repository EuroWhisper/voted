import { SET_POLLS } from './actiontypes';

export function setPolls(polls) {
    return {
        type: SET_POLLS,
        payload: polls
    }
};
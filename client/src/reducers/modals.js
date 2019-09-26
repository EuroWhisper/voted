import {SHOW_ADD_POLL_MODAL, SHOW_ADD_POLL_SUCCESS_MODAL, SHOW_ADD_POLL_FAILURE_MODAL, HIDE_MODAL} from '../actions/actiontypes';
const initialState = null;

const modals = function(state = initialState, action) {
    switch(action.type) {
        case SHOW_ADD_POLL_MODAL:
            return action.payload;
        case SHOW_ADD_POLL_SUCCESS_MODAL:
            return action.payload;
        case SHOW_ADD_POLL_FAILURE_MODAL:
            return action.payload;
        case HIDE_MODAL:
            return null;
        default:
            return state;
    }
};

export default modals;
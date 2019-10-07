import {SET_POLLS, ADD_POLL, UPDATE_POLL} from '../actions/actiontypes';
import { updatePoll } from '../actions';

const polls = function(state = [], action) {
    switch(action.type) {
        case SET_POLLS:
            return action.payload;
        case ADD_POLL:
            return [action.payload, ...state];
        case UPDATE_POLL:
            let insertIndex;
            const polls = state.filter((poll, index) => {
                if (poll._id !== action.payload._id) {
                    return true;
                } else {
                    insertIndex = index;
                    return false;
                }
            });
            polls.splice(insertIndex, 0, action.payload);
            return polls;

            
        default:
            return state;
    }
};

export default polls;
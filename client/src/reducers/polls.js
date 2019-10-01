import {SET_POLLS, ADD_POLL, UPDATE_POLL} from '../actions/actiontypes';
import { updatePoll } from '../actions';

const initialState = [
    {
        id: 1,
        category: "Television",
        question: "What is your favorite show?",
        options: [
            {
                description: "Jessica Jones",
                votes: 3
            },
            {
                description: "Hannibal",
                votes: 2
            },
            {
                description: "Gotham",
                votes: 1
            }
        ]
    },
    {
        id: 2,
        category: "Sports",
        question: "Who is the pound-for-pound greatest UFC fighter of all time?",
        options: [
            {
                description: "Georges St. Pierre",
                votes: 952
            },
            {
                description: "Jon Jones",
                votes: 45
            },
            {
                description: "Demetrious Johnson",
                votes: 634
            }
        ]
    }
];

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
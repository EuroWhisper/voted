import polls from './polls';
import {combineReducers} from 'redux';

const reducers = combineReducers({polls});

export default reducers;

// -------------------STATE EXAMPLE-----------------
// {
//     polls: [
//         {
//             id: 1,
//             question: "What is your favorite show?",
//             options: [
//                 {
//                     description: "Jessica Jones",
//                     votes: 350
//                 },
//                 {
//                     description: "Hannibal",
//                     votes: 750
//                 },
//                 {
//                     description: "Gotham",
//                     votes: 24
//                 }
//             ]
//         },
//         {
//             id: 2,
//             question: "Who is the pound-for-pound greatest UFC fighter of all time?",
//             options: [
//                 {
//                     description: "Georges St. Pierre",
//                     votes: 952
//                 },
//                 {
//                     description: "Jon Jones",
//                     votes: 45
//                 },
//                 {
//                     description: "Demetrious Johnson",
//                     votes: 634
//                 }
//             ]
//         }
//     ];
// }
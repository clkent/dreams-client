//import { OPEN_WINDOW, CLOSE_WINDOW } from '../_actions/dashboard.action';

//TODO: set initial state
// const initialState = {
//   newPostToggle: true,
//   calendarToggle: true,
//   postToggle: false
// };

//TODO: update state based on action taken
//   export default function reducer(state = initialState, action) {
//     switch (action.type) {
//       case SET_AUTH_TOKEN:
//         return Object.assign({}, state, {
//           authToken: action.authToken
//         });
//       case CLEAR_AUTH:
//         return Object.assign({}, state, {
//           authToken: null,
//           currentUser: null
//         });
//       case AUTH_REQUEST:
//         return Object.assign({}, state, {
//           loading: true,
//           error: null
//         });
//       case AUTH_SUCCESS:
//         return Object.assign({}, state, {
//           loading: false,
//           currentUser: action.currentUser
//         });
//       case AUTH_ERROR:
//         return Object.assign({}, state, {
//           loading: false,
//           error: action.error
//         });
//       default:
//         return state;
//     }
//   }

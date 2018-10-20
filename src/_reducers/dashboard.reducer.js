import { VIEW_CALENDAR, VIEW_POST_FORM } from '../_actions/dashboard.action';

const initialState = {
  viewCalendar: true,
  viewPostForm: true
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case VIEW_CALENDAR:
      return Object.assign({}, state, {
        viewCalendar: action.viewCalendar
      });
    case VIEW_POST_FORM:
      return Object.assign({}, state, {
        viewPostForm: action.viewPostForm
      });
    default:
      return state;
  }
}

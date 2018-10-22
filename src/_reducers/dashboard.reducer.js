import {
  VIEW_CALENDAR,
  VIEW_POST_FORM,
  RE_RENDER
} from '../_actions/dashboard.action';

const initialState = {
  viewCalendar: true,
  viewPostForm: true,
  reRender: false
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
    case RE_RENDER:
      return Object.assign({}, state, {
        reRender: action.reRender
      });
    // case FORM_POSITION:
    //   return Object.assign({}, state, {
    //     formPosition: action.formPosition
    //   });
    default:
      return state;
  }
}

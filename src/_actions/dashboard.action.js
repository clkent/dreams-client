export const VIEW_CALENDAR = 'VIEW_CALENDAR';
export const viewCalendar = viewCalendar => {
  return {
    type: VIEW_CALENDAR,
    viewCalendar
  };
};

export const VIEW_POST_FORM = 'VIEW_POST_FORM';
export const viewPostForm = viewPostForm => {
  return {
    type: VIEW_POST_FORM,
    viewPostForm
  };
};

export const FORM_POSITION = 'FORM_POSITION';
export const formPosition = formPosition => {
  return {
    type: FORM_POSITION,
    formPosition
  };
};

import { SubmissionError } from 'redux-form';

import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const submitPostForm = post => (dispatch, getState) => {
  const { title, content } = post;
  const authToken = localStorage.getItem('authToken');

  return fetch(`${API_BASE_URL}/post`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({
      title,
      content
    })
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .catch(err => {
      const { message } = err;
      // Convert ValidationErrors into SubmissionErrors for Redux Form
      return Promise.reject(
        new SubmissionError({
          title: message
        })
      );
    });
};

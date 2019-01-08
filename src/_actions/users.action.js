import { SubmissionError } from 'redux-form';

import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const signUpUser = user => dispatch => {
  return fetch(`${API_BASE_URL}/user`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .catch(err => {
      if (
        err.message === 'A user with that username and/or email already exists.'
      ) {
        const { message } = err;
        return Promise.reject(
          new SubmissionError({
            username: message
          })
        );
      }

      if (err.error.isJoi) {
        const joiMessage = err.error.details[0].message;
        const joiLocation = err.error.details[0].path[0];
        return Promise.reject(
          new SubmissionError({
            [joiLocation]: joiMessage
          })
        );
      }

      const { message } = err;
      // Convert ValidationErrors into SubmissionErrors for Redux Form
      return Promise.reject(
        new SubmissionError({
          username: message
        })
      );
    });
};

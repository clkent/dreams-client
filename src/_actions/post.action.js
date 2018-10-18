import { SubmissionError } from 'redux-form';

import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST
  };
};

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const fetchPostsSuccess = posts => {
  return {
    type: FETCH_POSTS_SUCCESS,
    posts
  };
};

export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';
export const fetchPostsError = error => {
  return {
    type: FETCH_POSTS_ERROR,
    error
  };
};

//Fetch user's posts async
export const fetchPosts = () => dispatch => {
  const authToken = localStorage.getItem('authToken');
  dispatch(fetchPostsRequest());
  fetch(`${API_BASE_URL}/post`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(res => dispatch(fetchPostsSuccess(res)))
    .catch(err => dispatch(fetchPostsError(err)));
};

//Submit posts async
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

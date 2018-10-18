import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_ERROR
} from '../_actions/post.action';

const initialState = {
  loading: false,
  posts: [],
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return Object.assign({}, state, { loading: true });
    case FETCH_POSTS_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        error: null,
        posts: action.posts
      });
    case FETCH_POSTS_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      });
    default:
      return state;
  }
}

import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_ERROR,
  SET_CURRENT_POST,
  DELETE_CURRENT_POST
} from '../_actions/post.action';

const initialState = {
  loading: false,
  posts: [],
  postId: null,
  error: null,
  postViewed: false
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
    case SET_CURRENT_POST:
      return Object.assign({}, state, {
        postId: action.postId
      });
    case DELETE_CURRENT_POST:
      return Object.assign({}, state, {
        posts: state.posts.filter(post => post.id !== action.postId)
      });
    default:
      return state;
  }
}

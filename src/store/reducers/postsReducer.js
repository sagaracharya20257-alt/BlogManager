import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  CLEAR_POSTS,
} from "../actions/postsActions";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.payload };
    case FETCH_POSTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case ADD_POST:
      const newId = state.posts.length ? Math.max(...state.posts.map((p) => p.id)) + 1 : 1;
      return { ...state, posts: [{ id: newId, ...action.payload }, ...state.posts] };
    case EDIT_POST:
      return {
        ...state,
        posts: state.posts.map((p) => (p.id === action.payload.id ? { ...p, ...action.payload } : p)),
      };
    case DELETE_POST:
      return { ...state, posts: state.posts.filter((p) => p.id !== action.payload) };
    case CLEAR_POSTS:
      return { ...initialState };
    default:
      return state;
  }
}

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../actions/authActions";
import { CLEAR_POSTS } from "../actions/postsActions";

const initialState = {
  isAuth: false,
  currentUser: null,
  error: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, error: null };
    case LOGIN_SUCCESS:
      return { ...state, isAuth: true, currentUser: action.payload, error: null };
    case LOGIN_FAILURE:
      return { ...state, isAuth: false, currentUser: null, error: action.payload };
    case LOGOUT:
      return { ...state, isAuth: false, currentUser: null, error: null };
    case CLEAR_POSTS:
      return { ...state }; // just to react when posts are cleared
    default:
      return state;
  }
}

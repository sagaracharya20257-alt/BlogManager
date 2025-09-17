import { fetchPosts, clearPosts } from "./postsActions";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

export const loginRequest = () => ({ type: LOGIN_REQUEST });
export const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
export const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });
export const logout = () => ({ type: LOGOUT });

// Thunk for login
export const login = (username, password) => (dispatch, getState) => {
  dispatch(loginRequest());
  const { users } = getState().users;
  const found = users.find((u) => u.username === username && u.password === password);

  if (found) {
    dispatch(loginSuccess(found));
    dispatch(fetchPosts()); // fetch posts after login
  } else {
    dispatch(loginFailure("Invalid username or password"));
  }
};

// Thunk for logout
export const performLogout = () => (dispatch) => {
  dispatch(logout());
  dispatch(clearPosts());
};

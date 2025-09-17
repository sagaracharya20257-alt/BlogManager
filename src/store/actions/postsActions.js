export const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";
export const ADD_POST = "ADD_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";
export const CLEAR_POSTS = "CLEAR_POSTS";

export const fetchPostsRequest = () => ({ type: FETCH_POSTS_REQUEST });
export const fetchPostsSuccess = (posts) => ({ type: FETCH_POSTS_SUCCESS, payload: posts });
export const fetchPostsFailure = (error) => ({ type: FETCH_POSTS_FAILURE, payload: error });

export const addPost = (data) => ({ type: ADD_POST, payload: data });
export const editPost = (data) => ({ type: EDIT_POST, payload: data });
export const deletePost = (id) => ({ type: DELETE_POST, payload: id });
export const clearPosts = () => ({ type: CLEAR_POSTS });

// Thunk to fetch posts
export const fetchPosts = () => async (dispatch) => {
  dispatch(fetchPostsRequest());
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    const data = await res.json();
    dispatch(fetchPostsSuccess(data));
  } catch (err) {
    dispatch(fetchPostsFailure(err.message));
  }
};

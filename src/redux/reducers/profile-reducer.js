import { usersApi } from "../../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

const initialState = {
  posts: [],
  newPostText: "",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 1,
        message: state.newPostText,
        like: 1,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
      break;
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        posts: [...state.posts],
        newPostText: action.newText,
      };
      break;
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    default:
      return state;
  }
};

export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const profileThunk = (userId) => {
  return (dispatch) => {
    usersApi.profile(userId).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  };
};

export default profileReducer;

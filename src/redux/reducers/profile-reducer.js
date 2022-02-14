const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
  posts: [],
  newPostText: '',
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 1,
        message: state.newPostText,
        like: 1
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }
      break;
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        posts: [...state.posts],
        newPostText: action.newText
      };
      break;
    }
    default:
      return state;
  }
}

export const addPostCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
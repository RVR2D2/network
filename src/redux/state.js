const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let store = {
  _state: {
    profilePage: {
      posts: [],
      newPostText: 'JS programmer',
      dialogs: [
        { id: 1, name: 'Const' },
        { id: 2, name: 'Sass' },
        { id: 3, name: 'Less' }
      ],
    },
    dialogsPage: {
      messages: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'hi' },
        { id: 3, message: 'hi' }
      ]
    }
  },
  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log('Test');
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      const newPost = {
        id: 1,
        message: this._state.profilePage.newPostText,
        like: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default store;
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
  _state: {
    profilePage: {
      posts: [],
      newPostText: '',
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Const' },
        { id: 2, name: 'Sass' },
        { id: 3, name: 'Less' }
      ],
      messages: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'hi' },
        { id: 3, message: 'hi' }
      ],
      newMessageBody: ""
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


    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = '';
      this._state.dialogsPage.messages.push({ id: 6, message: body });
      this._callSubscriber(this._state);
    }
  }
}

export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
  ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default store;
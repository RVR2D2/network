import profileReducer from "./reducers/profile-reducer";
import dialogReducer from "./reducers/dialog-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [],
      newPostText: '',
    },
    dialogsPage: {
      dialogs: [
        {id: 1, name: 'Const'},
        {id: 2, name: 'Sass'},
        {id: 3, name: 'Less'}
      ],
      messages: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'hi'},
        {id: 3, message: 'hi'}
      ],
      newMessageBody: ""
    },
    sidebar: {}
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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  }
}

export default store;
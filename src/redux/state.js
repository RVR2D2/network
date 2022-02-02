let store = {
  _state: {
    profilePage: {
      posts: [],
      newPostText: 'JS programmer',
      dialogs: [
        {id: 1, name: 'Const'},
        {id: 2, name: 'Sass'},
        {id: 3, name: 'Less'}
      ],
    },
    dialogsPage: {
      messages: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'hi'},
        {id: 3, message: 'hi'}
      ]
    }
  },
  getState() {
    return this._state;
  },
  _callSubscriber () {
    console.log('Test');
  },
  addPost () {
    const newPost = {
      id: 1,
      message: this._state.profilePage.newPostText,
      like: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText (newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe (observer) {
    this._callSubscriber = observer;
  }
}


export default store;
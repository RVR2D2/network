import {rerenderEntireTree} from "../render";

let state = {
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
};

export const addPost = () => {
  const newPost = {
    id: 1,
    message: state.profilePage.newPostText,
    like: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export default state;
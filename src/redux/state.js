let state = {
  profilePage: {
    posts: [
      {
        message: 'Test',
        like: 12,
        id: 1
      },
      {
        message: 'Test2',
        like: 1,
        id: 2
      }
    ],
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

export default state;
const SEND_MESSAGE = "SEND_MESSAGE";

const initialState = {
  dialogs: [{ id: 1, name: "Test" }],
  messages: [{ id: 1, message: "hi" }],
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,

        messages: [...state.messages, { id: 2, message: body }],
      };
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogReducer;

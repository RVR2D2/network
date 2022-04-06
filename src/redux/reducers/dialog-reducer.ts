const SEND_MESSAGE = "SEND_MESSAGE";

type InitialStateType = {
  dialogs: Array<object>;
  messages: Array<object>;
};

const initialState: InitialStateType = {
  dialogs: [{ id: 1, name: "Test" }],
  messages: [{ id: 1, message: "hi" }],
};

const dialogReducer = (state = initialState, action: any): InitialStateType => {
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

type sendMessageCreatorType = {
  type: typeof SEND_MESSAGE;
  newMessageBody: string;
};

export const sendMessageCreator = (
  newMessageBody: string
): sendMessageCreatorType => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogReducer;

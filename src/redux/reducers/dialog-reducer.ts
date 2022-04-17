import { InferActionsTypes } from "../redux-store";

const initialState: InitialStateType = {
  dialogs: [{ id: 1, name: "Test" }],
  messages: [{ id: 1, message: "hi" }],
};

const dialogReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case "SN/DIALOG/SEND_MESSAGE":
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 2, message: body }],
      };
    default:
      return state;
  }
};

export const actions = {
  sendMessageCreator: (newMessageBody: string) =>
    ({
      type: "SN/DIALOG/SEND_MESSAGE",
      newMessageBody,
    } as const),
};

export default dialogReducer;

type InitialStateType = {
  dialogs: Array<object>;
  messages: Array<object>;
};
type ActionsType = InferActionsTypes<typeof actions>;

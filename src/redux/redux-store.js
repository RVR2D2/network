import {combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profile-reducer";
import dialogReducer from "./reducers/dialog-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer
  }
)

let store = createStore(reducers);

export default store;
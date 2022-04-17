import {
  Action,
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from "redux";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import { reducer as formReducer } from "redux-form";

import profileReducer from "./reducers/profile-reducer";
import dialogReducer from "./reducers/dialog-reducer";
import usersReducer from "./reducers/users-reducer";
import appReducer from "./reducers/app-reducer";
import authReducer from "./reducers/auth-reducer";

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

type RootReducer = typeof rootReducer;
export type AppStateType = ReturnType<RootReducer>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;

export type InferActionsTypes<
  T extends { [key: string]: (...args: any[]) => any }
> = ReturnType<PropertiesType<T>>;

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<
  R,
  AppStateType,
  unknown,
  A
>;

let store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;

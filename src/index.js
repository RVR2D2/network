import { StrictMode } from "react";
import store from "./redux/redux-store";
import { BrowserRouter } from "react-router-dom";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";

render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);

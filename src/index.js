import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createStore from "./redux/store";

import App from "./containers/App";

import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={createStore()}>
    <App />
  </Provider>,
  rootElement
);

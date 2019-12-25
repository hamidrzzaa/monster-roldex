import React from "react";
import ReactDom from "react-dom";
import "./styles/styles.scss";
import store from "./store/store";
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";

ReactDom.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.querySelector("#root")
);

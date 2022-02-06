import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./App";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../store";
import { HashRouter } from "react-router-dom";

export const renderUI = () =>
  ReactDOM.render(
    <ReduxProvider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </ReduxProvider>,
    document.querySelector("#ui")
  );

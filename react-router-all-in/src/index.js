import React from "react";
import { render } from "react-dom";

import App from "./App";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import configureStore, { history } from "./redux/configureStore";

const store = configureStore();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

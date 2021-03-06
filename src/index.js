import React from "react";
import { render } from "react-dom";
import App from "./App.jsx";
import * as serviceWorker from "./serviceWorker";
import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "./redux/rootReducer.js";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { censoredWordMiddleWare } from "./redux/middleware.js";

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk,
    censoredWordMiddleWare
  ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from "react";
import { render } from "react-dom";
import { applyMiddleware, createStore, compose } from "redux"; // compose wrapping(add middlewarre and devtools)
import { Provider } from "react-redux"; // link redux state with react
import thunk from "redux-thunk";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { rootReducer } from "./redux/rootReducer";
import { fetchPosts } from './redux/actions'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunk
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.dispatch(fetchPosts())

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(app, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

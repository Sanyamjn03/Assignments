import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { counterReducer } from "./redux/counterSlice";
import App from "./App";

// Step 1: Create the Redux store
const store = createStore(counterReducer);

// Step 2: Render the App inside the Provider
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

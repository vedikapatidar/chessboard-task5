import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Chessboard from "./components/Chessboard";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <Chessboard />
  </Provider>,
  document.getElementById("root")
);

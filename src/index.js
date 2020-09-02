import React from "react";
import ReactDOM from "react-dom";
import "./Styles/Index.scss";
import App from "./Pages/App";

// This is where our single "main" parent component from
// React is injected into the HTML

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

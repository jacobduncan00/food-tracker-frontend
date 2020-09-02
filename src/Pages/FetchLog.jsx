import React, { Component } from "react";
import FetchData from "../Requests/FetchLog";
import "../Styles/App.scss";

class FetchLog extends Component {
  render() {
    return (
      <div className="FetchData">
        <FetchData />
      </div>
    );
  }
}

export default FetchLog;

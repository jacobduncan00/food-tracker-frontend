import React, { Component } from "react";
import GetSpecific from "../Requests/FetchSpec";
import "../Styles/App.scss";

class Search extends Component {
  render() {
    return (
      <div className="SearchInfo">
        <GetSpecific />
      </div>
    );
  }
}

export default Search;

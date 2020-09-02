import React from "react";
import { useHistory } from "react-router-dom";

// import Particles from "react-particles-js";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styles/tailwind.css";
// import "../Styles/App.scss";

function HomePage() {
  let history = useHistory();
  const logBtn = {
    border: "none" /* Remove borders */,
    color: "white" /* White text */,
    padding: "12px 16px" /* Some padding */,
    fontSize: "16px" /* Set a font size */,
    cursor: "pointer" /* Mouse pointer on hover */,
  };

  return (
    <div className="App">
      <h1 className="font-bold text-6xl text-gray-900 text-center align-middle mt-64">
        Headache Tracker
      </h1>
      <h4 className="font-semibold text-3xl text-gray-800 text-center align-middle pb-16">
        by Jacob Duncan
      </h4>
      <div className="flex items-start h-24">
        <div className="flex-1 text-center px-4 py-2 m-2">
          <button
            className="inline-block"
            styles={logBtn}
            onClick={() => {
              history.push("/log");
            }}
          >
            <FontAwesomeIcon
              icon={faEdit}
              size="2x"
              className="text-gray-900"
            />
            <div className="inline-block text-2xl pl-4 text-gray-800 hover:text-gray-900">
              Log Information
            </div>
          </button>
        </div>
        <div className="flex-1 text-center px-4 py-2 m-2">
          <button
            className="inline-block"
            styles={logBtn}
            onClick={() => {
              history.push("/search");
            }}
          >
            <FontAwesomeIcon
              icon={faSearch}
              size="2x"
              className="text-gray-900"
            />
            <div className="inline-block text-2xl pl-4 text-gray-800 hover:text-gray-900">
              Search Information
            </div>
          </button>
        </div>
        <div className="flex-1 text-gray-700 text-center px-4 py-2 m-2">
          <button
            className="inline-block"
            styles={logBtn}
            onClick={() => {
              history.push("/fetch");
            }}
          >
            <FontAwesomeIcon
              icon={faDownload}
              size="2x"
              className="text-gray-900"
            />
            <div className="inline-block text-2xl pl-4 text-gray-800 hover:text-gray-900">
              Fetch Information
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

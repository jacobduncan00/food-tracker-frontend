import React, { Component } from "react";
import getData from "../Tools/ClientGetAll";
import Data from "../Components/Data";
import "../Styles/tailwind.css";

export default class getInfo extends Component {
  constructor() {
    super();
    this.state = {
      serverResponse: [],
      serverResponseSize: 0,
      showResponse: false,
    };
    this.displayServerInfo = this.displayServerInfo.bind(this);
  }

  async displayServerInfo(event) {
    event.preventDefault();
    let result = await getData();
    result.json().then((data) => {
      let serverObject = { ...data };
      let size = Object.keys(serverObject.info).length;
      this.setState({
        serverResponse: [...serverObject.info],
        serverResponseSize: size,
        showResponse: true,
      });
    });
  }

  render() {
    let card = null;
    if (this.state.showResponse) {
      card = <Data content={this.state.serverResponse} />;
    }
    return (
      <div className="get-info">
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <button
                className="appearance-none block w-full bg-pink-400 text-gray-700 border border-black-500 rounded py-3 px-4 leading-tight hover:bg-green-400 hover:text-black hover:font-bold"
                id="fetch-button"
                type="submit"
                onClick={this.displayServerInfo}
              >
                Fetch
              </button>
            </div>
          </div>
        </form>
        <div className="m-16">{card}</div>
      </div>
    );
  }
}

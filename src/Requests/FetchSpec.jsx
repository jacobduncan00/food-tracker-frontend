import React, { Component } from "react";
import getData from "../Tools/ClientGetSpec";
import Data from "../Components/Data";
import toTitleCase from "../Tools/TitleCase";
import "../Styles/tailwind.css";

export default class fetchSpecific extends Component {
  constructor() {
    super();
    this.state = {
      value1: "",
      value2: "",
      response: "",
      serverResponse: {},
      showCard: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }
  handleChange1(event) {
    this.setState({ value1: event.target.value });
  }

  handleChange2(event) {
    this.setState({ value2: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    // If it is a date and needs to be reformatted so that the routes in the backend
    // can understand the data being parsed
    if (this.state.value2.includes("/")) {
      const dateArr = this.state.value2.split("/");
      let newDate = dateArr.join("");
      let result1 = await getData(this.state.value1, newDate);
      if (result1 === 0 || result1 === 404) {
        this.setState({
          value1: "",
          value2: "",
          response: "❌ Search parameters not found in Database!",
          serverResponse: "",
          showCard: false,
        });
        return;
      }
      result1.json().then((data) => {
        this.setState({
          value1: "",
          value2: "",
          response: "✅ Found in Database!",
          serverResponse: data,
          showCard: true,
        });
      });
    } else {
      let result2 = await getData(this.state.value1, this.state.value2);
      if (result2 === 0 || result2 === 404) {
        this.setState({
          value1: "",
          value2: "",
          response: "❌ Search parameters not found in Database!",
          serverResponse: "",
          showCard: false,
        });
        return;
      }
      result2.json().then((data) => {
        this.setState({
          value1: "",
          value2: "",
          response: "✅ Found in Database!",
          serverResponse: data,
          showCard: true,
        });
      });
    }
  }

  render() {
    let card;
    if (this.state.showCard) {
      card = <Data content={this.state.serverResponse} />;
    }
    return (
      <div className="fetch-specific">
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Type
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-search-type"
                type="text"
                placeholder="Breakfast"
                value={toTitleCase(this.state.value1)}
                onChange={this.handleChange1}
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Item
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-search-item"
                type="text"
                placeholder="Eggs"
                value={toTitleCase(this.state.value2)}
                onChange={this.handleChange2}
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <button
                className="appearance-none block w-full bg-pink-400 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight hover:bg-green-400 hover:text-black hover:font-bold"
                id="grid-button"
                type="submit"
                onClick={this.handleSubmit}
              >
                Search
              </button>
            </div>
          </div>
        </form>
        <label className="block uppercase tracking-wide text-gray-800 text-xl font-bold mb-2 ml-12">
          {this.state.response}
        </label>
        <div className="m-16">{card}</div>
      </div>
    );
  }
}

import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import Search from "./Search.jsx";
import FetchLog from "./FetchLog.jsx";
import LogInfo from "./LogInfo.jsx";
import Error from "./Error.jsx";
import "../Styles/App.scss";

class App extends Component {
  render() {
    return (
      <div className="Main-Application">
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/log" component={LogInfo} />
              <Route path="/search" component={Search} />
              <Route path="/fetch" component={FetchLog} />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

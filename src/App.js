import React, { Component } from "react";
import { Router } from "@reach/router";
import { Concepts, Guide, Landing, Tools } from "./pages";

class App extends Component {
  render() {
    return (
      <Router>
        <Landing path="/" />
        <Tools path="/tools" />
        <Guide path="/guide" />
        <Concepts path="/concepts" />
      </Router>
    );
  }
}

export default App;

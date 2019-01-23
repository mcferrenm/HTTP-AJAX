import React, { Component } from "react";
import axios from "axios";

import AppWrapper from "./styles/AppWrapper";

class App extends Component {
  state: {
    friends: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
  render() {
    return <AppWrapper className="app">App</AppWrapper>;
  }
}

export default App;

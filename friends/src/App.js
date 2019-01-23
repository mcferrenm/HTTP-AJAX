import React, { Component } from "react";
import axios from "axios";

import FriendsList from "./components/FriendsList";
import AppWrapper from "./styles/AppWrapper";

class App extends Component {
  state = {
    friends: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res =>
        this.setState({
          friends: res.data
        })
      )
      .catch(err => console.log(err));
  }
  render() {
    return (
      <AppWrapper className="app">
        <FriendsList friends={this.state.friends} />
      </AppWrapper>
    );
  }
}

export default App;

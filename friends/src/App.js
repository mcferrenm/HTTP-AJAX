import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";

import FriendsNav from "./components/FriendsNav";
import FriendsList from "./components/FriendsList";
import FriendsInputForm from "./components/FriendsInputForm";

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

  addFriendToList = () => {
    console.log(123);
  };

  render() {
    return (
      <Container>
        <FriendsNav />
        <Row>
          <Col className="col-auto">
            <FriendsInputForm addFriendToList={this.addFriendToList} />
          </Col>
          <Col>
            <FriendsList friends={this.state.friends} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;

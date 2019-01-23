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

  addFriendToList = friend => {
    axios
      .post("http://localhost:5000/friends", friend)
      .then(res =>
        this.setState({
          friends: res.data
        })
      )
      .catch(err => console.log(err));
  };

  updateFriend = (id, friend) => {
    axios
      .put(`http://localhost:5000/friends/${id}`, friend)
      .then(res =>
        this.setState({
          friends: res.data
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <FriendsNav />
        <Row>
          <Col className="col-auto">
            <FriendsInputForm
              addFriendToList={this.addFriendToList}
              updateFriend={this.updateFriend}
            />
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

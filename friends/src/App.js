import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";

import FriendsNav from "./components/FriendsNav";
import FriendsList from "./components/FriendsList";
import FriendsInputForm from "./components/FriendsInputForm";

class App extends Component {
  state = {
    friends: [],
    name: "",
    age: 0,
    email: "",
    id: 0
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

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

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

  editFriend = id => {
    const friend = this.state.friends[id - 1];

    this.setState({
      name: friend.name,
      age: friend.age,
      email: friend.email,
      id: friend.id
    });
  };

  updateFriend = () => {
    axios
      .put(`http://localhost:5000/friends/${this.state.id}`, {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      })
      .then(res =>
        this.setState({
          friends: res.data
        })
      )
      .catch(err => console.log(err));

    this.setState({
      name: "",
      age: null,
      email: "",
      id: null
    });
  };

  render() {
    return (
      <Container>
        <FriendsNav />
        <Row>
          <Col className="col-auto">
            <FriendsInputForm
              addFriendToList={this.addFriendToList}
              handleChange={this.handleChange}
              updateFriend={this.updateFriend}
              name={this.state.name}
              age={this.state.age}
              email={this.state.email}
            />
          </Col>
          <Col>
            <FriendsList
              friends={this.state.friends}
              editFriend={this.editFriend}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;

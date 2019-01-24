import React, { Component } from "react";
import axios from "axios";
import { Container, Col } from "reactstrap";
import { Route } from "react-router-dom";

import FriendsNav from "./components/FriendsNav";
import FriendsList from "./components/FriendsList";
import FriendsInputForm from "./components/FriendsInputForm";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      name: "",
      age: "",
      email: "",
      id: 0,
      isUpdating: false
    };
  }

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

  addFriendToList = () => {
    const friend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    axios
      .post("http://localhost:5000/friends", friend)
      .then(res =>
        this.setState({
          friends: res.data
        })
      )
      .catch(err => console.log(err));
    this.props.history.push("/");
  };

  editFriend = id => {
    const friend = this.state.friends[id - 1];

    this.setState({
      name: friend.name,
      age: friend.age,
      email: friend.email,
      id: friend.id,
      isUpdating: true
    });

    this.props.history.push("/edit");
  };

  cancelUpdate = () => {
    this.setState({
      name: "",
      age: "",
      email: "",
      id: null,
      isUpdating: false
    });

    this.props.history.push("/");
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
          friends: res.data,
          name: "",
          age: "",
          email: "",
          id: null,
          isUpdating: false
        })
      )
      .catch(err => console.log(err));

    this.props.history.push("/");
  };

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
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
        <FriendsNav isUpdating={this.state.isUpdating} />
        <Col sm="12" md={{ size: 9, offset: 1 }}>
          <Route
            exact
            path="/"
            render={props => (
              <FriendsList
                {...props}
                friends={this.state.friends}
                editFriend={this.editFriend}
                deleteFriend={this.deleteFriend}
              />
            )}
          />
          <Route
            path="/edit"
            render={props => (
              <FriendsInputForm
                {...props}
                addFriendToList={this.addFriendToList}
                handleChange={this.handleChange}
                updateFriend={this.updateFriend}
                name={this.state.name}
                age={this.state.age}
                email={this.state.email}
                isUpdating={this.state.isUpdating}
                cancelUpdate={this.cancelUpdate}
              />
            )}
          />
        </Col>
      </Container>
    );
  }
}

export default App;

import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class FriendsInputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: null,
      email: "",
      id: null
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Enter name..."
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">Age</Label>
          <Input
            type="number"
            name="age"
            id="age"
            placeholder="Enter age..."
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email..."
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="id">Id</Label>
          <Input
            type="number"
            name="id"
            id="id"
            placeholder="Enter id..."
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button
          onClick={() =>
            this.props.addFriendToList({
              name: this.state.name,
              age: this.state.age,
              email: this.state.email
            })
          }
        >
          Submit
        </Button>
        <Button
          onClick={() =>
            this.props.updateFriend(this.state.id, {
              name: this.state.name
              // age: this.state.age,
              // email: this.state.email
            })
          }
        >
          Update
        </Button>
      </Form>
    );
  }
}

export default FriendsInputForm;

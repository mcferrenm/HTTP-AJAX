import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class FriendsInputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: null,
      email: ""
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
          <Label for="examplePassword">Name</Label>
          <Input
            type="text"
            name="name"
            placeholder="Enter name..."
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Age</Label>
          <Input
            type="number"
            name="age"
            placeholder="Enter age..."
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            placeholder="Enter email..."
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button onClick={this.props.addFriendToList}>Submit</Button>
      </Form>
    );
  }
}

export default FriendsInputForm;

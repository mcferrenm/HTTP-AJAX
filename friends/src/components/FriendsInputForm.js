import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const FriendsInputForm = props => {
  return (
    <Form>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Enter name..."
          onChange={props.handleChange}
          value={props.name}
        />
      </FormGroup>
      <FormGroup>
        <Label for="age">Age</Label>
        <Input
          type="number"
          name="age"
          id="age"
          placeholder="Enter age..."
          onChange={props.handleChange}
          value={props.age}
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email..."
          onChange={props.handleChange}
          value={props.email}
        />
      </FormGroup>
      <FormGroup>
        {!props.isUpdating && (
          <Button onClick={props.addFriendToList}>Submit</Button>
        )}
      </FormGroup>
      <FormGroup>
        {props.isUpdating && (
          <Button onClick={props.updateFriend}>Update</Button>
        )}
      </FormGroup>
    </Form>
  );
};

export default FriendsInputForm;

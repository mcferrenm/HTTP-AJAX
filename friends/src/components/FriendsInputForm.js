import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const FriendsInputForm = () => {
  return (
    <Form>
      <FormGroup>
        <Label for="examplePassword">Name</Label>
        <Input type="text" name="name" placeholder="Enter name..." />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Age</Label>
        <Input type="number" name="age" placeholder="Enter age..." />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" placeholder="Enter email..." />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};

export default FriendsInputForm;

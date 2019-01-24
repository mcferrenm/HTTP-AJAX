import React from "react";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Button
} from "reactstrap";

const FriendsList = props => {
  return (
    <div>
      {props.friends.map(friend => (
        <ListGroup flush key={friend.id}>
          <ListGroupItem>
            <ListGroupItemHeading>{`${friend.name}: ${
              friend.age
            }`}</ListGroupItemHeading>
            <ListGroupItemText>{friend.email}</ListGroupItemText>
            <Button size="sm" onClick={() => props.editFriend(friend.id)}>
              Edit
            </Button>{" "}
            <Button size="sm" onClick={() => props.deleteFriend(friend.id)}>
              Delete
            </Button>
          </ListGroupItem>
        </ListGroup>
      ))}
    </div>
  );
};

export default FriendsList;

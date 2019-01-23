import React from "react";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Button
} from "reactstrap";

const FriendsList = props => {
  const { friends } = props;
  return (
    <div>
      {friends.map(friend => (
        <ListGroup flush key={friend.id}>
          <ListGroupItem>
            <ListGroupItemHeading>{`${friend.name}: ${
              friend.age
            }`}</ListGroupItemHeading>
            <ListGroupItemText>{friend.email}</ListGroupItemText>
            <Button onClick={() => props.editFriend(friend.id)}>Edit</Button>
          </ListGroupItem>
        </ListGroup>
      ))}
    </div>
  );
};

export default FriendsList;

import React from "react";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";

const FriendsList = props => {
  const { friends } = props;
  return (
    <div>
      {friends.map(friend => (
        <ListGroup flush>
          <ListGroupItem>
            <ListGroupItemHeading>{`${friend.name}: ${
              friend.age
            }`}</ListGroupItemHeading>
            <ListGroupItemText>{friend.email}</ListGroupItemText>
          </ListGroupItem>
        </ListGroup>
      ))}
    </div>
  );
};

export default FriendsList;

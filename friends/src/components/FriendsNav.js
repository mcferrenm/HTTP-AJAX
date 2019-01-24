import React from "react";
import { Nav, NavItem, NavLink as NavLinkWrapper } from "reactstrap";
import { NavLink } from "react-router-dom";

const FriendsNav = props => {
  const conditionalTitle = props.isUpdating ? "Update" : "Add";

  return (
    <Nav tabs>
      <NavItem>
        <NavLinkWrapper>
          <NavLink to="/">Friends List</NavLink>
        </NavLinkWrapper>
      </NavItem>
      <NavItem>
        <NavLinkWrapper>
          <NavLink to="/edit">{`${conditionalTitle} Friend`}</NavLink>
        </NavLinkWrapper>
      </NavItem>
    </Nav>
  );
};

export default FriendsNav;

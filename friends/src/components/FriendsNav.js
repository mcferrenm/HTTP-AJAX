import React from "react";
import { Nav, NavItem, NavLink as NavLinkWrapper } from "reactstrap";
import { NavLink } from "react-router-dom";

const FriendsNav = () => {
  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLinkWrapper>
            <NavLink to="/">Friends List</NavLink>
          </NavLinkWrapper>
        </NavItem>
        <NavItem>
          <NavLinkWrapper>
            <NavLink to="/edit">Add Friend</NavLink>
          </NavLinkWrapper>
        </NavItem>
      </Nav>
    </div>
  );
};

export default FriendsNav;

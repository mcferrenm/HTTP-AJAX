import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const FriendsNav = () => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">FriendsList</NavbarBrand>
      </Navbar>
    </div>
  );
};

export default FriendsNav;

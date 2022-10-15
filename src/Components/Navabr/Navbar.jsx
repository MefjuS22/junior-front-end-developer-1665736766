import React from 'react';
import { NavBar } from './NavbarStyles';
import Logo from './Union.png';
const Navbar = () => {
  return (
    <NavBar>
      <img src={Logo} alt="logo" />
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/168/168724.png"
          alt="avatar"
        />
      </div>
    </NavBar>
  );
};

export default Navbar;

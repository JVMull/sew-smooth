import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const NavBar = () => {
  const user = Cookies.get('user');
  const userRole = Cookies.get('user_role');

  return (
    <header>
      <h1>Sew Smooth</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
      </nav>
      {user && <p>Welcome, {user} ({userRole})</p>}
    </header>
  );
};

export default NavBar;

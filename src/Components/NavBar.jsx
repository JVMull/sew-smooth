// NavBar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import '../css/NavBar.css';

// get redux store
import { useSelector } from 'react-redux';

const NavBar = (props) => {
  const cart = useSelector((state) => state.cart);

  const cartItemCount = cart.items.reduce((acc, item) => acc + item.quantity, 0);
  const user = Cookies.get('user');
  const userRole = Cookies.get('user_role');

  return (
    <header>
      <h1>Sew Smooth</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/Shop'>Services</Link>
        <Link to='/AboutUs'>About Us</Link>
      </nav>
    </header>
  );
        }

export default NavBar;

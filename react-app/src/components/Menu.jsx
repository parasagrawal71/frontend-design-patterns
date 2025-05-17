// Menu.js
import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/edit-contact/1">Edit Contact</Link>
        </li>
        <li>
          <Link to="/create-contact">Create Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;

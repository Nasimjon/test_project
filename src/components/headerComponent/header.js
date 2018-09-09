import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
          <li className="first">
              <Link to="/">Home</Link>
            </li>
            <li className="second">
              <Link to="/Services">Services</Link>
            </li>
            <li className="third">
            <Link to="/Products">Products</Link>
            </li>
            <li className="fourth">
            <Link to="/Feedback">Feedback</Link>
            </li>
            <li className="fifth">
            <Link to="/Contacts">Contacts</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;

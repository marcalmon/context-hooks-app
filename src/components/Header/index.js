import React from 'react';

import './styles.css';
import logo from './logo192.png';

function Header() {
  return (
    <nav className="header" >
      <img src={logo} />
      <ul className="header-nav">
        <li>Hola</li>
        <li>Hola</li>
        <li>Hola</li>
      </ul>
    </nav>
  )
}

export default Header;
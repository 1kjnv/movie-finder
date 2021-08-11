import React from 'react';
import { HeaderStyle } from '../styles/Header';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderStyle>
      <ul>
        <li><Link to="">Top</Link></li>
        <li><Link to="">Popular</Link></li>
        <li><Link to="">Latest</Link></li>
        <li><Link to="">Upcoming</Link></li>
      </ul>
    </HeaderStyle>
  )
};

export default Header;
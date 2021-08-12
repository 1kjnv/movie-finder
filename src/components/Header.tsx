import React from 'react';
import { HeaderStyle } from '../styles/Header';
import { Link } from 'react-router-dom';
import { ProgressPlugin } from 'webpack';

const Header = (props: any) => {
  return (
    <HeaderStyle>
      <div>
        <input type="text" onChange={props.handleChange} value={props.query} />
        <input type="submit" onClick={props.handleSubmit} value="Search" />
      </div>
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
import React from 'react';
import { HeaderBlock, Searchbar, Navbar } from './styled';
import { Link } from 'react-router-dom';

const Header = (props: any) => {
  return (
    <HeaderBlock>
      <Navbar>
        <Link to='#' onClick={() => props.handleCategory('top_rated')}>Top rated</Link>
        <Link to='#' onClick={() => props.handleCategory('upcoming')}>Upcoming</Link>
        <Link to='#' onClick={() => props.handleCategory('popular')}>Popular</Link>
      </Navbar>
      <Searchbar>
        <input id="searchArea" type="text" onChange={props.handleChange} value={props.query} />
      </Searchbar>
    </HeaderBlock>
  );
};

export default Header;

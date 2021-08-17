import React from 'react';
import { HeaderBlock, Searchbar } from '../styles/Header';
import { Link } from 'react-router-dom';
import { ProgressPlugin } from 'webpack';

const Header = (props: any) => {
  return (
    <HeaderBlock>
      <Searchbar>
        <input id="searchArea" type="text" onChange={props.handleChange} value={props.query} />
        <input id="submitButton" type="submit" onClick={props.handleSubmit} value="Search" />
      </Searchbar>
    </HeaderBlock>
  )
};

export default Header;

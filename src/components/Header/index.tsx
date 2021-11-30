import React from 'react';
import { HeaderBlock, Searchbar } from './styled';

const Header = (props: any) => {
  return (
    <HeaderBlock>
      <Searchbar>
        <input id="searchArea" type="text" onChange={props.handleChange} value={props.query} />
      </Searchbar>
    </HeaderBlock>
  )
};

export default Header;

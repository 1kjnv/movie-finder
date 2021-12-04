import React, { useRef } from 'react';
import { HeaderBlock, Searchbar, Navbar, StyledBurger } from './styled';
import { Link } from 'react-router-dom';

const BurgerBtn = ({ open, setOpen }: any) => {
  return (
    <StyledBurger {...open} {...setOpen}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
};

const Menu = ({ handleCategory }) => {
  return (
    <Navbar>
      <Link to="#" onClick={() => handleCategory('top_rated')}>
        Top rated
      </Link>
      <Link to="#" onClick={() => handleCategory('upcoming')}>
        Upcoming
      </Link>
      <Link to="#" onClick={() => handleCategory('popular')}>
        Popular
      </Link>
    </Navbar>
  )
};

const Header = (props: any) => {
  const { open, setOpen } = props;
  const node = useRef();
  return (
    <HeaderBlock>
      <BurgerBtn {...open} {...setOpen} />
    </HeaderBlock>
  );
};

export default Header;

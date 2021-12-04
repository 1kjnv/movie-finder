import React, { useRef } from 'react';
import { HeaderBlock, Searchbar, Navbar, StyledBurger } from './styled';
import { Link } from 'react-router-dom';

const BurgerBtn = ({ open, setOpen }: any) => {
  return (
    <StyledBurger
      {...open}
      onClick={() => {
        setOpen(!open);
        console.log(!open);
      }}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
};

const Menu = ({ open }: any) => {
  console.log('menu open', open);

  return (
    <Navbar {...open}>
      <Link to="#">
        Top rated
      </Link>
      <Link to="#">
        Upcoming
      </Link>
      <Link to="#">
        Popular
      </Link>
    </Navbar>
  )
};

const Header = (props: any) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const node = useRef();

  return (
    <HeaderBlock>
      <div ref={node}>
        <BurgerBtn open={open} setOpen={setOpen} />
        <Menu open={open} handleCategory={props.handleCategory} />
      </div>
    </HeaderBlock>
  );
};

export default Header;

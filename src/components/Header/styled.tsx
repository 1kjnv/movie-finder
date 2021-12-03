import styled from 'styled-components';

export const HeaderBlock = styled.div`
  border: 2px solid black;
  width: 100%;
  height: 3rem;

  display: grid;
  grid-auto-flow: column;
`;

export const Searchbar = styled.div`
  width: 25%;
  border-radius: 10%;
  border: 1px solid blue;

  input {
    width: 100%;
    height: 50%;
  }
`;

export const Navbar = styled.div`
  border: 1px solid black;
  width: 50%;

  a {
    text-decoration: none;
    color: black;
    border: 1px solid black;
    margin-left: 2%;
    margin-right: 2%;
  }
`;

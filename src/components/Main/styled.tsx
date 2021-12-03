import styled from 'styled-components';

export const MenuBlock = styled.div`
  margin-top: 5%;
`;

export const MainBlock = styled.div`
  margin: auto;
  width: 100%;
  padding-bottom: 3%;
  background: #fffefc;
`;

export const LoadingBlock = styled.div`
  text-align: center;
  margin-top: 25%;
`;

export const Pagination = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  grid-column-gap: 3%;
  border: 2px solid black;

  button {
    font-size: 20px;
    width: 150%;
  }
`;

export const ErrorMessage = styled.div`
  text-align: center;
  margin-top: 25%;
`;

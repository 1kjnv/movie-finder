import styled from 'styled-components';

export const MenuBlock = styled.div`
  margin-top: 5%;
`;

export const MainBlock = styled.div`
  width: 100%;
  padding-bottom: 5%;
  background: #fffefc;
`;

export const LoadingBlock = styled.div`
  @media only screen and (min-width: 320px) {
    text-align: center;
    margin-top: 55%;
    font-size: 50px;
  }
`;

export const Pagination = styled.div`
  @media only screen and (min-width: 320px) {
    margin: auto;
    width: 50%;

    button {
      font-size: 50px;
      background-color: #008CBA;
      color: white;
      width: 50%;
    }
  }
`;

export const ErrorMessage = styled.div`
  text-align: center;
  margin-top: 25%;
`;

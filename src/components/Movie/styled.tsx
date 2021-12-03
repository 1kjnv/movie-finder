import styled from 'styled-components';

export const MovieBlock = styled.div`
  @media (min-width: 325px) {
    display: inline-flex;
    text-align: center;

    margin-left: auto;
    margin-right: auto;

    border: 2px solid red;
    width: 100%;

    img {
      width: 100%;
    }

    a {
      text-decoration: none;
      color: black;
      font-weight: bold;
    }

    #name {
      margin-top: -0.5%;
    }
  };

  @media (min-width: 1024px) {
    display: inline-flex;
    width: 24%;
    height: 30%;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 1%;
    text-align: center;

    img {
      height: 90%;
      width: 100%;
    }

    #name {
      margin-top: -0.8%;
    }

    a {
      text-decoration: none;
      color: black;
      font-weight: bold;
    }
  }
`;

import styled from 'styled-components';

export const MovieBlock = styled.div`
  @media only screen and (min-width: 320px) {
    display: inline-flex;
    text-align: center;
    width: 100%;
    
    img {
      width: 90%;
    }

    #name {
      font-size: 50px;
    }

    a {
      text-decoration: none;
      font-weight: bold;
    }
  };

  @media only screen and (min-width: 414px) {
    display: block;
    text-align: center;
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

  @media only screen and (min-width: 624px) {
    body {
      background-color: yellow;
    }
  }

  @media only screen and (min-width: 1024px) {
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

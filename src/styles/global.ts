import { createGlobalStyle, styled } from "styled-components";

export default createGlobalStyle`
:root{
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Helvetica;
}

body {
    background-color: #000;
    color: #FFF;
    font-size: 1.6rem;
}

a {
    text-decoration: none;
    color: #7B68EE;
    transition: .5s;
}

a:hover {
    color: #9370DB;
}
`;

export const Loading = styled.p`
  text-align: center;
`;

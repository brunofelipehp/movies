import { createGlobalStyle, styled } from 'styled-components'

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Helvetica;
}

body {
    background-color: #000;
    color: #FFF;
}

a {
    text-decoration: none;
    color: #7B68EE;
    transition: .5s;
}

a:hover {
    color: #9370DB;
}
`

export const Loading = styled.p`
    text-align: center;
`

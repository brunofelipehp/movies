import { createGlobalStyle } from 'styled-components'

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
    color: #F7D354;
    transition: .5s;
}

a:hover {
    color: #B8930C;
}
`

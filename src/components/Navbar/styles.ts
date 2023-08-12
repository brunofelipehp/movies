import styled from "styled-components"

export const Menu = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 2rem;
background-color: #121212;

h2 {
   a {
    display: flex;
    align-items: center;
    gap: .5rem;
   } 
}

form {
    display: flex;
    gap: .5rem;

    button {
        background-color: #f7d354;
        border: 2px solid #f7d354;
        border-radius: 4px;
        color: #000;
        padding: .3rem;
        font-size: 1.3rem;
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: .4s;

        &:hover {
          background-color: transparent;
          color: #f7d354;
        }
    }
}

input {
    padding: .2rem .8rem;
    border-radius: 4px;
    border: none;
}
`
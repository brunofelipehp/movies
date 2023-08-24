import styled from "styled-components"


export const Card = styled.div`
width: 30%;
color: #FFF;
margin-bottom: 2.5rem;
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: #111;
padding: 1rem;

img {
    max-width: 100%;
}

img, h2, p {
    margin-bottom: 1rem;
}

svg {
    color: #7B68EE;
}

a {
        background-color: #7B68EE;
        border: 2px solid #7B68EE	;
        border-radius: 4px;
        color: #000;
        padding: 1rem .5rem;
        align-items: center;
        transition: .4s;
        text-align: center;
        font-weight: bold;

        &:hover {
          background-color: transparent;
          color: #7B68EE;
        }
    }
`
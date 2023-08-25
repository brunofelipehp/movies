import styled from "styled-components"


export const Card = styled.div`
width: 30rem;
color: #FFF;
margin-bottom: 2.5rem;
display: flex;
flex-direction: column;
justify-content: center;
background-color: #111;
padding: 1.6rem;

img {
    max-width: 100%;
}

img, h2, p {
    margin-bottom: 1.6rem;
}

svg {
    color: #7B68EE;
}

a {
        background-color: #7B68EE;
        border: 2px solid #7B68EE	;
        border-radius: 4px;
        color: #000;
        padding: 1.6rem .8rem;
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
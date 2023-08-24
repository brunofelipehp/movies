import styled from "styled-components"

export const FormSearchMovies = styled.form`
display: flex;
justify-content: center;
margin-top: 5rem;
margin-bottom: 3rem;

input {
    border: none;
    border-radius: 2rem;
    width: 23rem;
    height: 3rem;
    color: #7B68EE;
    padding: 1rem;
    font-weight: 700;

    background-color: #121212;

    &::placeholder  {
        color: #7B68EE;
        padding: .5rem;
        font-weight: 700;
    }
}
`
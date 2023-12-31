import styled from "styled-components";

export const FormSearchMovies = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  margin-bottom: 3rem;

  input {
    border: none;
    border-radius: 2rem;
    width: 30rem;
    height: 4.8rem;
    color: #7b68ee;
    padding: 1.6rem;
    font-weight: 700;

    background-color: #121212;

    &::placeholder {
      color: #7b68ee;
      padding: 0.8rem;
      font-weight: 700;
    }
  }
`;

import styled from "styled-components";

export const Card = styled.div`
  width: 30rem;
  color: #fff;
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #111;
  padding: 1.6rem;

  img {
    max-width: 100%;
  }

  img,
  h2,
  p {
    margin-bottom: 1.6rem;
  }

  svg {
    color: #7b68ee;
  }

  a {
    background-color: #7b68ee;
    border: 2px solid #7b68ee;
    border-radius: 4px;
    color: #000;
    padding: 1.6rem 0.8rem;
    align-items: center;
    transition: 0.4s;
    text-align: center;
    font-weight: bold;

    &:hover {
      background-color: transparent;
      color: #7b68ee;
    }
  }
`;

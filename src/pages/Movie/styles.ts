import styled from "styled-components"

export const MoviePage = styled.div`
color: #FFF;
display: flex;
justify-content: center;
text-align: center;
flex-direction: column;
max-width: 600px;
margin: 3.2rem auto;


svg {
    font-size: 2.4rem;
    color: #7B68EE;
}

@media (max-width: 700px) {
    max-width: 300px;
}

`

export const CardInfo = styled.div`
    text-align: center;

    img,
    h2,
    p {
        margin-bottom: 1.6rem;
    }

    h2 {
        font-size: 3.2rem;
    }

    p {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.64rem;
    }

    @media (max-width: 700px) {
      img {
        max-width: 300px;
     }
}
`

export const TagLine = styled.p`
text-align: center;
font-size: 2rem;
margin-bottom: 3.2rem;
`

export const Info = styled.div`
margin-bottom: 2.4rem;
text-align: center;

h3 {
    margin-bottom: 1.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .8rem;
}
`

export const Description = styled.div`
margin-bottom: 2.4rem;
padding-bottom: 16rem;

h3 {
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .8rem;
}

p {
    line-height: 1.8rem;
}
`


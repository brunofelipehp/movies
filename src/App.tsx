import styled from 'styled-components'
import GlobalStyle from './styles/global'

const Container = styled.div`
background-color: black;
color: white;
width: 100vw;
padding: 20px;

display: flex;
justify-content: center;
`
function App() {
  
  return (
    <div className='App'>
      <GlobalStyle />
      <Container>
      NEW Div
    </Container>
    </div>
   
  )
}

export default App

import {  Outlet } from 'react-router-dom'
import GlobalStyle from './styles/global'
import { Navbar } from './components/Navbar'


function App() {
  
  return (
    <div className='App'>
      <GlobalStyle />
     <Navbar />
      <Outlet />
    </div>
   
  )
}

export default App

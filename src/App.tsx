import { Outlet } from "react-router-dom";
import GlobalStyle from "./styles/global";
import { Navbar } from "./components/Navbar";
import { SearchMovies } from "./components/SearchMovies";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <SearchMovies />
      <Outlet />
    </div>
  );
}

export default App;

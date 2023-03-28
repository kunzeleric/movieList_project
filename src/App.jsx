import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./views/Home/Home";
import MovieDetail from "./views/MovieDetail/MovieDetail";

function App() {
  return (
    <>
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/moviedetail/:id" element={<MovieDetail/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;

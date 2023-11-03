import "./App.css";
import Navbar from "./Navbar";
import About from "./About";
import Products from "./Products";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/home" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/products" element={<Products></Products>} />
      </Routes>
    </div>
  );
}

export default App;

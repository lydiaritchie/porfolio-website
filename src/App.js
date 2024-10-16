import "./App.css";
import "./main.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { NavBar } from "./utils/NavBar";
import linesBackground from "./images/black-lines.svg";

function App() {
  return (
    <div>
      <header><NavBar /></header>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>

      <footer className="">footer</footer>
    </div>
  );
}

export default App;

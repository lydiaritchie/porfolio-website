import './App.css';
import './main.css';
import {BrowserRouter as Router} from "react-router-dom";
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Portfolio } from "./pages/Portfolio";
import { About } from './pages/About';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/portfolio" element={<Portfolio />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      </Routes>
    </Router>
  );
}

export default App;

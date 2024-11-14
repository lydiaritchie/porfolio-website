import "./App.css";
import "./main.css";
import { BrowserRouter as Router, Navigate } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/PortfolioPages/PortfolioRoutes";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { NavBar } from "./utils/NavBar";
import { Footer } from "./utils/Footer";
import PotteryPortfolio from "./pages/PortfolioPages/PotteryPortfolio";
import WebDevPortfolio from "./pages/PortfolioPages/WebDevPortfolio";
import DesignPortfolio from "./pages/PortfolioPages/DesignPortfolio";

function App() {
  return (
    <Router>
      <header>
        <NavBar bgColor="#8baac2" />
      </header>
      <Routes className="main-container">
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/*" element={<Portfolio />}>
          <Route index element={<Navigate to="web-development" replace />} />
          <Route path="web-development" element={<WebDevPortfolio />} />
          <Route path="design" element={<DesignPortfolio />} />
          <Route path="pottery" element={<PotteryPortfolio />} />
        </Route>

        <Route />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer>
        <Footer bgColor="#8baac2"/>
      </footer>
    </Router>
  );
}

export default App;

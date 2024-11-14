import React, {useState, useEffect} from "react";
import { NavBar } from "../utils/NavBar";
import { Footer } from "../utils/Footer";
import { getRandomColorScheme } from "../utils/randomizeColorScheme";
import { ColorSchemes } from "../utils/ColorSchemes";

export function About() {
   const [theme, setTheme] = useState(ColorSchemes["BlueGrey"]);
  
/* Randomize color for fun 
useEffect(() => {
  const themeName = getRandomColorScheme();
  console.log(themeName);
  setTheme(themeName);
},[]) */

  return (
    <div className="main-container" style={{backgroundColor: theme.bg}}>
      <header>
        <NavBar bgColor={theme.bg} />
      </header>
      <h1 className="text-center fst-italic" style={{ color: theme.title, marginTop: "15px" }}>
        About
      </h1>
      <footer>
        <Footer bgColor={theme.bg} />
      </footer>
    </div>
  );
}

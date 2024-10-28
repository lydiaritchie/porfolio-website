import React from "react";
import { NavBar } from "../utils/NavBar";

export function About() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <h1 className="text-center fst-italic" style={{ marginTop: "15px" }}>
        About
      </h1>
    </div>
  );
}

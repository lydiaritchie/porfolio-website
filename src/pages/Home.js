import React, { useState } from "react";
import { NavBar } from "../utils/NavBar";
import DeskComponent from "../graphics/DeskComponent";
import { brew } from "../utils/api";
import lydiaRitchieVertical from "../graphics/personal-branding/lydia-ritchie-vertical.svg"

export function Home() {
  const [brewState, setBrewState] = useState("");
  const [brewError, setBrewError] = useState("");

  async function handleTeapot() {
    if (brewError !== "") {
      setBrewError("");
      return;
    }
    try {
      const fetchedBrewResult = await brew("teapot");
      const brewResult = JSON.stringify(fetchedBrewResult);
      setBrewState(brewResult);
      console.log(brewResult);
    } catch (error) {
      console.log(error);
      setBrewError(`${error.status}: ${error.message}`);
    }
  }

  return (
    <div style={{ backgroundColor: "#92a7b2" }}>
       <header><NavBar /></header>

      

      <div className="desk-svg">
        <DeskComponent className="" />
      </div>

      {brewError ? (
        <div className="alert alert-danger">{brewError}</div>
      ) : (
        <div></div>
      )}
      
      <div className="justify-self-center">
        <img style={{ width: "120px" }} onClick={handleTeapot} />
      </div>
    </div>
  );
}

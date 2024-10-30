import React, { useState } from "react";
import { NavBar } from "../utils/NavBar";
import DeskComponent from "../graphics/DeskComponent";
import { brew } from "../utils/api";
import { ReactComponent as LydiaRitchieVertical } from "../graphics/personal-branding/lydia-ritchie-vertical.svg";

export function Home() {
  return (
    <div>
      <header>
        <NavBar bgColor="#8baac2" />
      </header>

      <div className="main-container">
        <div className="d-flex justify-content-center">
          <LydiaRitchieVertical
            className="w-75 d-sm-none"
            style={{ paddingTop: "10px" }}
          />
        </div>

        <div className="desk-container">
          <div className="desk" style={{ backgroundColor: "" }}>
            <DeskComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

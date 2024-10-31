import React, { useState } from "react";
import { NavBar } from "../utils/NavBar";
import DeskComponent from "../graphics/DeskComponent";
import { brew } from "../utils/api";
import { ReactComponent as LydiaRitchieVertical } from "../graphics/personal-branding/lydia-ritchie-vertical.svg";
import { ReactComponent as LydiaRitchieHorizontal } from "../graphics/personal-branding/lydia-ritchie-horizontal.svg";

export function Home() {

  return (
    <div>
      <header>
        <NavBar bgColor="#8baac2" />
      </header>

      <div className="main-container">
        <div className="d-flex justify-content-center">
          <LydiaRitchieHorizontal
            className="d-block d-sm-none"
            style={{ width: "90%" }}
          />
          
          {/*<LydiaRitchieVertical className="d-none d-sm-block"
          style={{ width: "50%", paddingTop: "10px"}} />*/}

        </div>

        <div className="d-flex justify-content-center d-block d-sm-none" style={{ color: "#173c5a"}}>
        Software Engineer, Designer, Artist
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

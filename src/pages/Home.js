import React, {useState, useEffect} from "react";
import { NavBar } from "../utils/NavBar";
import DeskComponent from "../graphics/DeskComponent";
import { Footer } from "../utils/Footer";
import { ReactComponent as LydiaRitchieHorizontal } from "../graphics/personal-branding/lydia-ritchie-horizontal.svg";
import lydiaCeramicsWork from "../graphics/personal-branding/lydia-ceramics-work.jpeg";
import lydiaHeadshot from "../graphics/personal-branding/lydia-headshot.jpg";
import { AboutTitle } from "../graphics/home-graphics/about-title.js";

export function Home() {
  return (
    <div>
      <header>
        <NavBar bgColor="#8baac2" />
      </header>
      <div className="main-container">
        <div
          className="d-flex row justify-content-center name-horizontal"
          style={{ background: "", marginBottom: "-15px", marginTop: "5px" }}
        >
          <LydiaRitchieHorizontal className="" style={{ width: "90%" }} />

          <div
            className="d-flex justify-content-center"
            style={{
              color: "#425c77",
              marginTop: "10px",
              marginBottom: "5px",
              fontSize: "4vw",
            }}
          >
            Software Engineer, Designer, Artist
          </div>
        </div>

        <div className="desk-container">
            <DeskComponent />
        </div>

        <div className="">
          <div className="">
            <img className="headshot" src={lydiaCeramicsWork} />

            <div className="about-intro">
              My name is Lydia and I am a full stack engineer, designer, and
              artist. I enjoy problem solving, coding challenges and creating
              responsive designs.
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Footer bgColor="#8baac2" />
      </footer>
    </div>
  );
}

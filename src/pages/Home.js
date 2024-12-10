import React, { useState, useEffect } from "react";
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

        <div className="about-section d-flex">
          {/* Beginning of about-section-1 */}
          <div className="about-section-1">
            <img className="headshot" src={lydiaHeadshot} />

            <div className="about-intro">
              My name is Lydia and I am a full stack engineer, designer, and
              artist. I enjoy problem solving, coding challenges and creating
              responsive designs.
            </div>
          </div>
          {/* ^ End of about-section-1 */}

          {/* Beginning of about-section-2 */}
          <div className="about-section-2">
             {/* Education start */}
            <div>
              <h6 className="heading-bold mb-3">Education</h6>

              <div className="d-flex justify-content-between">
                <div className="col-5 year-title">2024 </div>
                <div className="col-8">
                  Chegg Skills, Software Engineering Trainee
                </div>
              </div>

              <div className="d-flex justify-content-between mt-2">
                <div className="col-5 year-title">2019 - 2023</div>
                <div className="col-8">BA, Studio Art, Wheaton College</div>
              </div>
            </div>
            {/* ^ Education end */}

            {/* Experience start */}
            <div className="mt-4">
              <h6 className="heading-bold mb-3" style={{ color: "" }}>
                Experience
              </h6>

              <div className="d-flex justify-content-between">
                <div className="col-5 year-title">2023 - Present </div>
                <div className="col-7">
                  Media Production Lead -{" "}
                  <a className="inline-link" href="https://isdsi.org/">
                    ISDSI
                  </a>{" "}
                </div>
              </div>

              <div className="d-flex justify-content-between mt-2">
                <div className="col-5 year-title">2023 - Present</div>
                <div className="col-7">
                  Graphic Designer, Media Production Lead -{" "}
                  <a
                    className="inline-link"
                    href="https://www.cfcnxfitness.com/"
                  >
                    Crossfit Chiang Mai
                  </a>{" "}
                </div>
              </div>
              
            </div>
            {/* ^ Education end */}
          </div>
          {/* ^ End of about-section-2 */}
        </div>
      </div>
      <footer>
        <Footer bgColor="#8baac2" />
      </footer>
    </div>
  );
}

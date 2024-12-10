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

        <div className="about d-flex row">
          {/* Beginning of about-col-1 */}
          <div className="about-col-1 col-12 col-md-8">
            {/* Beginning of about-section-1 */}
            <div className="about-section-1">
              <img className="headshot" src={lydiaHeadshot} />

              <div className="about-intro">
                My name is Lydia and I am a full stack engineer. I have also
                have experience in graphic design, illustration and video
                production. I have project based experience, a strong drive for
                self-motivation and creative problem solving skills. My art
                background provides me with a good eye for design and artistic
                creativity. I was born and raised in Thailand!
              </div>
            </div>
            {/* ^ End of about-section-1 */}

            {/* Start of skills section */}
            <div className="skills-section">
              <h6 className="heading-bold mb-2 tech-title">
                Technical Skills
              </h6>
              <div className="d-flex tech-skills-container">
                <div className="tech-skills">React</div>
                <div className="tech-skills">HTML</div>
                <div className="tech-skills">CSS</div>
                <div className="tech-skills">RESTful API</div>
                <div className="tech-skills">Node.JS</div>
                <div className="tech-skills">Express</div>
                <div className="tech-skills">PostgreSQL</div>
                <div className="tech-skills">Bootstrap</div>
              </div>

              {/* PUT ADOBE ICONS HERE */}
            </div>

            <div className="skills-section mt-4">
              <h6 className="heading-bold mb-2 tech-title">
                Soft Skills
              </h6>
              <div className="d-flex tech-skills-container">
               
              </div>
            </div>

            {/* ^ End of skills section */}
          </div>

          <div className="about-col-2 col-12 col-md-4">
            {/* Beginning of education-section */}
            <div className="education-section">
              {/* Education start */}
              <div>
                <h6 className="heading-bold mb-3">Education</h6>

                <div className="d-flex justify-content-between">
                  <div className="col-5 year-title">2024 </div>
                  <div className="col-7">
                    Chegg Skills, Software Engineering Trainee
                  </div>
                </div>

                <div className="d-flex justify-content-between mt-2">
                  <div className="col-5 year-title">2019 - 2023</div>
                  <div className="col-7">BA, Studio Art, Wheaton College</div>
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
            {/* ^ End of education-section */}
          </div>
        </div>
      </div>
      <footer>
        <Footer bgColor="#8baac2" />
      </footer>
    </div>
  );
}

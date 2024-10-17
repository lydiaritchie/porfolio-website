import React from "react";
import linkedInIcon from "../images/linkedIn-icon.svg";
import githubIcon from "../images/github-icon.svg";
import emailIcon from "../images/email-bg-icon.svg";
import instaIcon from "../images/insta-icon.svg";

export function Contact() {
  return (
    <div>
      <h1 className="text-center py-3">Contact</h1>
      <div className="d-flex flex-wrap justify-content-center">
        <div className="row my-3 w-75" style={{ backgroundColor: "" }}>
          <a
            className="btn contact-btn"
            href="https://www.linkedin.com/in/lydia-g-ritchie/"
          >
            <img
              className="mx-2"
              src={linkedInIcon}
              alt="LinkedIn Icon"
              width={30}
            />
            LinkedIn
          </a>

          <a
            className="btn contact-btn"
            href="https://github.com/lydiaritchie"
          >
            <img
              className="mx-2"
              src={githubIcon}
              alt="LinkedIn Icon"
              width={30}
            />
            GitHub
          </a>

          <a
            className="btn contact-btn"
            href="mailto:lydia.g.ritchie@gmail.com"
          >
            <img
              className="mx-2"
              src={emailIcon}
              alt="LinkedIn Icon"
              width={30}
            />
            lydia.g.ritchie@gmail.com
          </a>

          <a
            className="btn contact-btn"
            href="https://www.instagram.com/lydiaritchieart/"
          >
            <img
              className="mx-2"
              src={instaIcon}
              alt="LinkedIn Icon"
              width={30}
            />
            @lydiaritchieart
          </a>
        </div>
      </div>
    </div>
  );
}

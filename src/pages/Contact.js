import React from "react";
import { useState } from "react";
import linkedInIcon from "../images/linkedIn-icon.svg";
import githubIcon from "../images/github-icon.svg";
import emailIcon from "../images/email-bg-icon.svg";
import instaIcon from "../images/insta-icon.svg";

export function Contact() {
  const colors = [
    "#D5F2E3",
    "#FCEADE",
    "#A4BFEB",
    "#AF9BB6",
    "#CDFFF9",
    "#FADF63",
    "#A3BBAD",
    "#FCAA67",
    "#AEADF0",
    "#EBB9DF",
  ];
  const getRandomColor = () =>
    colors[Math.floor(Math.random() * colors.length)];
  const [linkedInColor, setLinkedInColor] = useState("transparent");
  const [gitHubColor, setGitHubColor] = useState("transparent");
  const [emailColor, setEmailColor] = useState("transparent");
  const [instaColor, setInstaColor] = useState("transparent");

  return (
    <div>
      <h1 className="text-center py-3">Contact</h1>
      <div className="d-flex flex-wrap justify-content-center">
        <div className="row my-3 w-75">
          <a
            className="btn contact-btn"
            href="https://www.linkedin.com/in/lydia-g-ritchie/"
            onMouseEnter={() => setLinkedInColor(getRandomColor())}
            onMouseLeave={() => setLinkedInColor("transparent")}
            style={{ backgroundColor: linkedInColor }}
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
            onMouseEnter={() => setGitHubColor(getRandomColor())}
            onMouseLeave={() => setGitHubColor("transparent")}
            style={{ backgroundColor: gitHubColor }}
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
            onMouseEnter={() => setEmailColor(getRandomColor())}
            onMouseLeave={() => setEmailColor("transparent")}
            style={{ backgroundColor: emailColor }}
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
            onMouseEnter={() => setInstaColor(getRandomColor())}
            onMouseLeave={() => setInstaColor("transparent")}
            style={{ backgroundColor: instaColor }}
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

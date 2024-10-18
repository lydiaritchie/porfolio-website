import React, { useState } from "react";
import { NavBar } from "../utils/NavBar";
import { ReactComponent as NameLogo } from "../images/lydia-ritchie-name-logo.svg";
import { ReactComponent as LongNameLogo } from "../images/lydia-ritchie-horizontal.svg";
import linesBackground from "../images/black-lines.svg";
import flowerMug from "../images/flowerMug.png";

export function Home() {
  const initialTeapot = "";
  const [teapot, setTeapot] = useState(initialTeapot);

  //when clicked, throws 418
  async function Teapot() {
    if (teapot === "") {
      setTeapot(
        <div className="alert alert-danger" style={{width: "100px", padding: "5px"}}>
          <h5>Error: 418</h5>
          I'm a teapot
        </div>
      );
    } else {
      setTeapot("");
    }
  }

  return (
    <div>
      <div className="py-3 d-flex row justify-content-center">
        <LongNameLogo
         className="w-75  d-none d-sm-block"
          style={{ backgroundColor: "" }}
        />
        <NameLogo className="w-75 d-sm-none" style={{ backgroundColor: "" }} />

        <h4 className="text-center mt-3" style={{ fontSize: "20px" }}>
          Software Engineer, Designer, Artist
        </h4>
      </div>

      <div className="justify-self-center">
        <img style={{ width: "120px" }} src={flowerMug} onClick={Teapot} />
        <div>{teapot}</div>
      </div>
    </div>
  );
}

import React from "react";
import { NavBar } from "../utils/NavBar";
import { ReactComponent as NameLogo } from "../images/lydia-ritchie-name-logo.svg";
import { ReactComponent as LongNameLogo } from "../images/lydia-ritchie-horizontal.svg";
import linesBackground from "../images/black-lines.svg";

export function Home() {
  return (
    <div>
      <div className="py-3 d-flex row justify-content-center ">

        <LongNameLogo className="w-75  d-none d-sm-block" style={{backgroundColor:""}}/>
        <NameLogo className="w-75 d-sm-none" style={{backgroundColor:""}}/>

        <h4 className="text-center" style={{ fontSize: "20px" }}>
          Software Engineer, Designer, Artist
        </h4>

      </div>
    </div>
  );
}

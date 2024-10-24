import React, { useState, useEffect } from "react";
import { ReactComponent as NameLogo } from "../images/lydia-ritchie-name-logo.svg";
import { ReactComponent as LongNameLogo } from "../images/lydia-ritchie-horizontal.svg";
import {ReactComponent as DeskPerspective} from "../images/desk-perspective.svg";
import flowerMug from "../images/flowerMug.png";
import { getRandomColor } from "../utils/randomColor";
import { brew } from "../utils/api";

export function Home() {
  const [brewState, setBrewState] = useState("");
  const [brewError, setBrewError] =  useState("");




  async function handleTeapot(){
    if(brewError !== ""){
      setBrewError("");
      return;
    }
    try{
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
    <div>
      <div className="py-3 d-flex row justify-content-center">
        <LongNameLogo
          className="d-none d-sm-block"
          style={{ backgroundColor: "", width: "500px" }}
        />
        <NameLogo className="d-sm-none" style={{ backgroundColor: "", width: "500px" }} />

        <h4 className="text-center mt-3" style={{ fontSize: "20px" }}>
          Software Engineer, Designer, Artist
        </h4>
      </div>

      <div className="justify-self-center">
        <img style={{ width: "120px" }} onClick={handleTeapot} />
      </div>

    <div className=" justify-content-center" style={{backgroundColor: ""}}>
      <DeskPerspective style={{  }}/>
    </div>


      {brewError ? (<div className="alert alert-danger">{brewError}</div>) : (<div></div>)}
    </div>
  );
}

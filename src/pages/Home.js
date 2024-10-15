import React from "react";
import { NavBar } from "../utils/NavBar";
import {ReactComponent as NameLogo} from "../images/lydia-ritchie-name-logo.svg"


export function Home(){
    return (
        <div>
            <header>{<NavBar/>}</header>
            <div className="py-3 d-flex row justify-content-center ">
            <NameLogo className="w-25"/>
                </div>
                
        </div>
    )
};
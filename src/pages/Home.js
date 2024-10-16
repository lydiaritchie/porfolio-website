import React from "react";
import { NavBar } from "../utils/NavBar";
import { ReactComponent as NameLogo } from "../images/lydia-ritchie-name-logo.svg";
import { ReactComponent as LongNameLogo } from "../images/lydia-ritchie-horizontal.svg";


export function Home(){
    return (
        <div>
            <header>{<NavBar/>}</header>
            <div className="py-3 d-flex row justify-content-center ">
                <LongNameLogo className="w-75  d-none d-sm-block"/>
                <NameLogo className="w-75 d-sm-none"/>
                </div>
                
        </div>
    )
};
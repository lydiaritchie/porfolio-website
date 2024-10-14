import React from "react";
import { NavBar } from "../utils/NavBar";

export function About(){
    return (
        <div>
            <header>{<NavBar/>}</header>
            <h5 className="text-center py-3">About</h5>
        </div>
    )
};
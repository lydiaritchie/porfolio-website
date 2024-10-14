import React from "react";
import { NavBar } from "../utils/NavBar";


export function Home(){
    return (
        <div>
            <header>{<NavBar/>}</header>
            <h3 className="text-center py-3">Lydia Ritchie</h3>
        </div>
    )
};
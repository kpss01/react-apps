import React from "react";
import { useLocation } from "react-router";

export const About = ()=>{

    const location = useLocation();

    return (
        
        <div>
            {console.log(location)}
            {console.log(location.state)}
            <h1>About US</h1>
        </div>
    )
}
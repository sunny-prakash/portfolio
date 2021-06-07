import React from "react";
import "./About.css";
import Properties from "./Properties";

const About = () => {
    return (
        <div id="about">
            <h1 className="about_heading">{"ABOUT"}</h1>
            <Properties />
        </div>
    );
};

export default About;

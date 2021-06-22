import React from "react";
import "./About.css";
import Properties from "./Properties";
import Introduction from "./Introduction";
import Courses from "./Courses";

const About = () => {
    return (
        <div id="about">
            <h1 className="about_heading">{"ABOUT"}</h1>
            <Properties />
            <div className="row row-cols-1 row-cols-md-2">
                <div className="col">
                    <Introduction />
                </div>
                <div className="col">
                    <Courses />
                </div>
            </div>
        </div>
    );
};

export default About;

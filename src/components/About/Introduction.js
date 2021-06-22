import React from "react";
import "./Introduction.css";

const Introduction = () => {
    return (
        <div id="introduction">
            <div>
                <div className="profile_box">
                    <div className="profileImg"></div>
                </div>

                <h3 style={{ fontWeight: "700" }}>{"Who's this guy?"}</h3>
                <p>{"I'm a passionate full stack developer and want to change it into a profession.I like creating attractive and intuitive websites."}</p>
            </div>
        </div>
    );
};

export default Introduction;

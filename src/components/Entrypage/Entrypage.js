import React from "react";
import "./Entrypage.css";

const Entrypage = () => {
    return (
        <div id="home">
            <div className="entry_main">
                <div className="bg_entry"></div>
                <div className="bg_img"></div>
                <div className="entry_block">
                    <h1 className="fs-1">
                        {"Hello, I'm "}
                        <span className="name">{"Sunny Prakash"}</span>
                    </h1>
                    <h2>{"I'm a full-stack web developer"}</h2>
                    <a href="#about">
                        <div className="mt-5 view_btn" dest="about">
                            {"View my work"}
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Entrypage;

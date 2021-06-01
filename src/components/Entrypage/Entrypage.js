import React from "react";
import "./Entrypage.css";

const Entrypage = () => {
    return (
        <React.Fragment>
            <div className="bg_entry"></div>
            <div className="bg_img"></div>
            <div className="entry_block">
                <h1 className="fs-1">
                    {"Hello, I'm "}
                    <span className="name">{"Sunny Prakash"}</span>{" "}
                </h1>
                <h2>{"I'm a full-stack web developer"}</h2>
                <div className="mt-5 view_btn">{"View my work"}</div>
            </div>
        </React.Fragment>
    );
};

export default Entrypage;

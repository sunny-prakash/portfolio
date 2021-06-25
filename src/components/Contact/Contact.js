import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <div id="contact">
            <div className="container">
                <h1 className="contact_heading">{"CONTACT"}</h1>
                <div style={{ textAlign: "center", padding: "0 0 2rem 0" }}>{"Have a question or want to work together?"}</div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div className="contact_form">
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <textarea name="message" id="" cols="10" rows="8" placeholder="Your message"></textarea>
                        <button type="submit">{"Submit"}</button>
                    </div>
                </div>
                <div className="contact_footer">
                    <div className="contact_social">
                        <a href="https://www.linkedin.com/in/sunny-pprakash" target="_blank">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="" target="_blank">
                            <i class="fab fa-instagram-square"></i>
                        </a>
                        <a href="https://codepen.io/sunnyprakash62" target="_blank">
                            <i class="fab fa-codepen"></i>
                        </a>
                        <a href="https://github.com/sunny-prakash" target="_blank">
                            <i class="fab fa-github-square"></i>
                        </a>
                    </div>
                    <div>
                        <p>
                            {"SUNNY PRAKASH "}
                            <span>{"© 2021"}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

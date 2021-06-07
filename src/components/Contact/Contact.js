import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <div id="contact">
            <div className="container">
                <h1 className="contact_heading">{"Contact"}</h1>
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
                        <i class="fab fa-facebook-square"></i>
                        <i class="fab fa-linkedin"></i>
                        <i class="fab fa-instagram-square"></i>
                        <i class="fab fa-codepen"></i>
                        <i class="fab fa-github-square"></i>
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

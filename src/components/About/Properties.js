import React from "react";
import "./Properties.css";

const Properties = () => {
    return (
        <div className="property_block">
            <div classname="row row-cols-4 row-cols-md-2 g-4">
                <div className="col" style={{ display: "inline-block", margin: ".5rem" }}>
                    <div className="property_card">
                        <div className="bg_shape">
                            <div className="icon_block">
                                <i className={`fas fa-rocket`} style={{ color: "white", fontSize: "50px" }}></i>
                            </div>
                        </div>
                        <h3 className="property_title">{"Dynamic"}</h3>
                        <p className="property_content">{"Websites don't have to be static, I love making pages come to life."}</p>
                    </div>
                </div>

                <div className="col" style={{ display: "inline-block", margin: ".5rem" }}>
                    <div className="property_card">
                        <div className="bg_shape">
                            <div className="icon_block">
                                <i className={`fas fa-tachometer-alt`} style={{ color: "white", fontSize: "50px" }}></i>
                            </div>
                        </div>
                        <h3 className="property_title">{"Fast"}</h3>
                        <p className="property_content">{"Fast load times and lag free interaction, my highest priority."}</p>
                    </div>
                </div>

                <div className="col" style={{ display: "inline-block", margin: ".5rem" }}>
                    <div className="property_card">
                        <div className="bg_shape">
                            <div className="icon_block">
                                <i className={`fas fa-mobile`} style={{ color: "white", fontSize: "50px", margin: "12px" }}></i>
                            </div>
                        </div>
                        <h3 className="property_title">{"Responsive"}</h3>
                        <p className="property_content">{"My layouts will work on any device, big or small."}</p>
                    </div>
                </div>

                <div className="col" style={{ display: "inline-block", margin: ".5rem" }}>
                    <div className="property_card">
                        <div className="bg_shape">
                            <div className="icon_block">
                                <i className={`fas fa-lightbulb`} style={{ color: "white", fontSize: "50px", margin: "12px" }}></i>
                            </div>
                        </div>
                        <h3 className="property_title">{"Intuitive"}</h3>
                        <p className="property_content">{"Strong preference for easy to use, intuitive UX/UI."}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Properties;

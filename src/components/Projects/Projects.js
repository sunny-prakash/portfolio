import React from "react";
import "./Projects.css";

const Projects = () => {
    return (
        <div id="projects">
            <h1>{"PROJECTS"}</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Projects;
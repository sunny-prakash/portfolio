import React from "react";
import "./Courses.css";

const Courses = () => {
    return (
        <div id="courses">
            <div>
                <p className="label">{"HTML"}</p>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: "80%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                        {"80%"}
                    </div>
                </div>
            </div>

            <div>
                <p className="label">{"CSS"}</p>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: "60%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                        {"60%"}
                    </div>
                </div>
            </div>

            <div>
                <p className="label">{"JAVASCRIPT"}</p>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: "70%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                        {"70%"}
                    </div>
                </div>
            </div>

            <div>
                <p className="label">{"REACTJS"}</p>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: "60%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                        {"60%"}
                    </div>
                </div>
            </div>

            <div>
                <p className="label">{"NODEJS"}</p>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: "40%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                        {"40%"}
                    </div>
                </div>
            </div>

            <div>
                <p className="label">{"EXPRESSJS"}</p>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: "50%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                        {"50%"}
                    </div>
                </div>
            </div>

            <div>
                <p className="label">{"MONGODB"}</p>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: "50%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                        {"50%"}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;

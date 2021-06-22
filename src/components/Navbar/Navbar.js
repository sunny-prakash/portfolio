import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div id="nav_bar" className="nav_main sticky-sm-top">
            <nav class="nav_main navbar navbar-expand-lg">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav nav_items">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">
                                    HOME
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    ABOUT
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    PROJECTS
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">
                                    CONTACT
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};
export default Navbar;

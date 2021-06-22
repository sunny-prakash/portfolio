import React, { Component } from "react";
import "./App.css";
// import { Route, Redirect, Switch } from "react-router-dom";
import Entrypage from "./components/Entrypage/Entrypage";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Entrypage />
                <Navbar />
                <About />
                <Projects />
                <Contact />
            </React.Fragment>
        );
    }
}

export default App;

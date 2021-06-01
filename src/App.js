import React, { Component } from "react";
import "./App.css";
import Entrypage from "./components/Entrypage/Entrypage";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Entrypage />
                <Nabar />
            </React.Fragment>
        );
    }
}

export default App;

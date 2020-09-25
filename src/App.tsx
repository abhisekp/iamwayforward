import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppContainer } from "./components/header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <AppContainer />
        </header>

        <iframe
          title="Business Partnership & Mentorship Interest Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLScnfXE1hXTwfho5MRzHomQD4MXHO7mJOACUGpUYsVVI3xTbVg/viewform?embedded=true"
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
        >
          Loading…
        </iframe>
      </div>
    </Router>
  );
}

export default App;

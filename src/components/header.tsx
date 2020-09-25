import React from "react";
import { Link } from "react-router-dom";

export const AppContainer = () => (
  <div className="App-container">
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
    <h1>
      <p className="App-title">
        #iamwayforward{" "}
        <span role="img" aria-label="go forward">
          ⏩
        </span>
        <br />
        <span className="App-subtitle">
          <em>Let's become successful together</em>
        </span>
      </p>
    </h1>
    <p className="App-content">
      We provide an unique ecosystem of{" "}
      <strong>
        <em>guided Entrepreneurship</em>
      </strong>{" "}
      to help you become an Entrepreneur. <br />
      <em>
        Fill-in the form below if you're interested and willing for{" "}
        <strong>Mentorship based Partnership.</strong>
      </em>{" "}
      <br />
      <span role="img" aria-label="scroll down">
        👇 👇 👇
      </span>
    </p>
  </div>
);

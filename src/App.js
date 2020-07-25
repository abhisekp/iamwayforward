import React from 'react';
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-container">
          <h1>
            <p className="App-title">#iamwayforward <span role="img" aria-label="go forward">⏩</span><br />
              <span className="App-subtitle"><em>Let's become successful together</em></span>
            </p>
          </h1>
          <p className="App-content">We provide a unique ecosystem of <strong><em>guided Entrepreneurship</em></strong> to help you become an Entrepreneur. <br />
            <em>Fill-in the form below if you're interested in <strong>Mentorship</strong> based Partnership.</em> <br />
            <span role="img" aria-label="scroll down">👇 👇 👇</span>
          </p>
        </div>
      </header>

      <iframe title="Business Partnership & Mentorship Interest Form" src="https://docs.google.com/forms/d/e/1FAIpQLScnfXE1hXTwfho5MRzHomQD4MXHO7mJOACUGpUYsVVI3xTbVg/viewform?embedded=true" width="640" height="100%" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
    </div>
  );
}

export default App;

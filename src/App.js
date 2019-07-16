import React from "react";
import develop from "./img/develop.svg";
import "./App.css";

function App() {
  return (
    <section className="intro">
      <div className="container">
        <div className="row flex-container">
          <div className="col-xs-12 col-sm-6">
            <h1>
              <span>I'm</span> <span>Reymundo</span> <span>Tenorio</span>
            </h1>
            <h2>Software Developer</h2>
          </div>

          <div className="col-xs-12 col-sm-6">
            <div className="image-container">
              <img src={develop} className="img-responsive" alt="Develop" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;

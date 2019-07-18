import React from "react";

class Intro extends React.Component {
  render() {
    return (
      <section className="intro">
        <div className="container">
          <div className="row flex-container">
            <div className="col-xs-12 col-sm-6">
              <h1>
                <span>I'm</span> <span>Reymundo</span> <span>Tenorio</span>
              </h1>

              <div className="title-container">
                <h2>Software Developer</h2>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6">
              <div className="image-container">
                <img src="/images/develop.svg" className="img-responsive" alt="Develop" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Intro;

import React from "react";
import "./stars.scss";
import Typed from "react-typed";
import bigImage from "../img/portada_linkedin.png";
import lottie from "lottie-web";
import animationData from "../img/animation.json";

class Intro extends React.Component {
  componentDidMount() {
    lottie.loadAnimation({
      container: this.animRef, // Ref to the HTML element where you want to render the animation
      renderer: "svg", // Use SVG renderer
      loop: true,
      autoplay: true,
      animationData: animationData, // Your animation data
    });
  }
  render() {
    return (
      <section id="home" className="intro route bg-image background-intro" style={{height: 'calc(90vh)'}}>
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="row align-items-center">
              <div className="col-md-4"></div>
              <div className="col-md-8 text-left">
                <h1 className="color-primary pb-0 mb-0">
                  <Typed
                    strings={["HELLO, MY NAME IS MARCOS"]}
                    typeSpeed={30}
                    backDelay={0}
                    backSpeed={0}
                    startDelay={0}
                    cursorChar=""
                    style={{ fontSize: 'calc(2vw + 2vh)', fontWeight: "lighter" }}
                  />
                </h1>
                <h2 className="color-primary pb-0 mb-0 pt-0 mt-0">
                  <Typed
                    strings={["MOBILE | BACKEND | FRONTEND"]}
                    typeSpeed={30}
                    backDelay={1100}
                    backSpeed={30}
                    startDelay={1500}
                    cursorChar=""
                    style={{ fontSize: 'calc(1.8vw + 1.8vh)' }}
                  />
                </h2>
                <h2 className="color-primary pb-0 mb-0">
                  <Typed
                    strings={["TEACHING PROGRAMMING AT INSTITUTO CERVANTES"]}
                    typeSpeed={30}
                    backDelay={0}
                    backSpeed={30}
                    startDelay={3500}
                    cursorChar=""
                    style={{ fontSize: 'calc(1.8vw + 1.8vh)', fontWeight: "lighter" }}
                  />
                </h2>
                <h2 className="color-primary pb-0 mb-0">
                  <Typed
                    strings={["¡LET'S CONNECT!"]}
                    typeSpeed={30}
                    backDelay={1100}
                    backSpeed={30}
                    startDelay={5500}
                    cursorChar=""
                    style={{ fontSize: 'calc(1.8vw + 1.8vh)' }}
                  />
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Intro;

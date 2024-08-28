import React from "react";
import "./stars.scss";
// import Typed from "react-typed";
// import reactLogo from "../img/animationhome.webm";
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
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <div
        id="home"
        style={{ backgroundImage: "url(" + bigImage + ")" , objectFit: "contain", backgroundRepeat: "no-repeat" }}
        className="intro route  bg-image background"
      >
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="row" style={{ alignItems: "center" }}>
              {/* <div className="col-md-6" style={{background: 'url(../img/portada_linkedin.png)'}} >
                <h1 className="intro-title mb-2">Hello, I am Marcos</h1>
                <p className="intro-subtitle">
                  
                  <strong className="text-slider">
                    <Typed
                      strings={["Mobile | Frontend | Backend Developer"]}
                      typeSpeed={80}
                      backDelay={1100}
                      backSpeed={30} cursorChar=""
                      style={{ fontSize: 30 }}
                    />
                  </strong>
                </p>
                <p>
                  
                  <Typed
                    strings={["Software Teacher at Institución Cervantes"]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={60} cursorChar=""
                    style={{ fontSize: 30 }}
                  />
                </p>
              </div> */}
              {/* <div className="col-md-6">
                <div
                  className="container"
                  style={{ paddingBottom: "80px", paddingTop: "80px" }}
                  ref={(ref) => (this.animRef = ref)}
                ></div>
              </div> */}

              {/* <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="#work"
                  role="button"
                >
                  See my works
                </a>
              </p> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;

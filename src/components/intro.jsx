import React from "react";
import "./stars.scss";
import Typed from "react-typed";
import reactLogo from "../img/animationhome.webm";
import lottie from "lottie-web";
import animationData from '../img/animation.json';


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
      <div id="home" className="intro route bg-image background">
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="row" style={{alignItems: "center"}}>
              <div className="col-md-6">
                <h1 className="intro-title mb-4">Welcome, I am Marcos</h1>
                <p className="intro-subtitle">
                  <span className="text-slider-items"></span>
                  <strong className="text-slider">
                    <Typed
                      strings={["Front End Developer", "Back End Developer", "Mobile Developer"]}
                      typeSpeed={80}
                      backDelay={1100}
                      backSpeed={30}
                      loop
                    />
                  </strong>
                </p>
              </div>
              <div className="col-md-6">
                <div className="container" style={{paddingBottom:"80px",paddingTop:"80px"}} ref={(ref) => (this.animRef = ref)}></div>
              </div>

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

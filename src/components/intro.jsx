import React, { useEffect, useRef } from "react";
import "./stars.scss";
import { ReactTyped as Typed } from "react-typed";
import lottie from "lottie-web";
import animationData from "../img/animation.json";

function Intro() {
  const animRef = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
    return () => anim.destroy();
  }, []);

  return (
    <section id="home" className="intro route bg-image background-intro" style={{ height: 'calc(90vh)' }}>
      <div className="intro-content display-table">
        <div className="table-cell">
          <div className="row align-items-center">
            {/* <div className="col-md-4" ref={animRef}></div> */}
            <div className="col-md-12 text-left">
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

export default Intro;


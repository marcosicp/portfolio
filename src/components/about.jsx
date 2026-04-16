import React from "react";
import mePhoto from "../img/profile.jpg";

function About() {
  return (
    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="col-sm-12">
          <div className="row">
            <div className="">
              <div className="about-me pt-4 pt-md-0">
                <div className="title-box-2">
                  <h5 className="title-left color-titles">About Me</h5>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="text-center">
                          <img src={mePhoto} alt="Marcos Casor" width={90} className="rounded" />
                        </div>
                      </div>
                      <div className="col-md-9">
                        I&apos;m a software developer graduated from{" "}
                        <a href="https://www.cervantes.edu.ar/">
                          {" "}
                          <b>Cervantes Institute</b>
                        </a>{" "}
                        passionate about crafting engaging and efficient user experiences. I leverage my expertise in
                        .NET (backend), Angular (frontend), and Flutter (mobile) to build robust and scalable
                        applications,
                      </div>
                    </div>
                    tailored to meet diverse project needs. I continuously seek out new technologies and knowledge,
                    staying ahead of the curve and contributing to personal and professional growth.
                    <br />
                    <br />
                  </div>
                  <div className="col-md-6">
                    <b style={{ borderBottom: "2px solid #4E4E4E", paddingBottom: "5px", fontSize: "20px" }}>
                      {" "}
                      Strengths &amp; Experience
                    </b>{" "}
                    <br />
                    <br />
                    <b>Full-Stack Mastery:</b> I thrive in both front-end and back-end development, seamlessly
                    connecting user interfaces with powerful backend logic.
                    <br />
                    <b>Project Versatility:</b> From greenfield projects to ongoing support, I adapt my skills to
                    deliver exceptional results in various contexts.
                    <br />
                    <b>Team Player:</b> I collaborate effectively in both large and small teams, fostering positive
                    communication and adhering to best practices.
                    <br />
                    <b>CI/CD Champion:</b> I actively manage continuous integration and deployment pipelines, ensuring
                    smooth and efficient software delivery.
                  </div>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

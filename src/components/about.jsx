import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "HTML5_skill",
          image: "https://img.icons8.com/wired/64/000000/javascript-logo.png",
          content: "HTML5",
          porcentage: "80%",
          value: "80",
        },
        {
          id: "CSS3_skill",
          image: "https://img.icons8.com/wired/64/000000/javascript-logo.png",
          content: "CSS3",
          porcentage: "75%",
          value: "75",
        },
        {
          id: "JavaScript_skill",
          image: "https://img.icons8.com/wired/64/000000/javascript-logo.png",
          content: "JavaScript",
          porcentage: "90%",
          value: "90",
        },
        {
          id: "Angular_skill",
          image: "https://img.icons8.com/wired/64/000000/javascript-logo.png",
          content: "Angular",
          porcentage: "90%",
          value: "90",
        },
        {
          id: "AngularJS_skill",
          image: "https://img.icons8.com/wired/64/000000/javascript-logo.png",
          content: "AngularJS",
          porcentage: "90%",
          value: "90",
        },
      ],
      skillsMobile: [
        {
          id: "Flutter_skill",
          image: "https://img.icons8.com/wired/64/000000/javascript-logo.png",
          content: "Flutter",
          porcentage: "80%",
          value: "80",
        },
        {
          id: "Xamarin_skill",
          image: "https://img.icons8.com/wired/64/000000/javascript-logo.png",
          content: "Xamarin",
          porcentage: "75%",
          value: "75",
        },
        {
          id: "AndroidNative(Java)_skill",
          image: "https://img.icons8.com/wired/64/000000/javascript-logo.png",
          content: "AndroidNative(Java)",
          porcentage: "90%",
          value: "90",
        },
      ],
      skillsDB: [
        {
          id: "MySQL_skill",
          content: "MySQL",
          image: "https://img.icons8.com/wired/64/000000/javascript-logo.png",
          porcentage: "80%",
          value: "80",
        },
        {
          id: "CosmosDB_skill",
          content: "CosmosDB",
          image: "https://img.icons8.com/wired/64/000000/javascript-logo.png",
          porcentage: "75%",
          value: "75",
        },
        {
          id: "MongoDB_skill",
          content: "MongoDB",
          image: "https://img.icons8.com/wired/64/000000/javascript-logo.png",
          porcentage: "85%",
          value: "85",
        },
        {
          id: "SQL_skill",
          content: "SQL",
          image: "https://img.icons8.com/wired/64/000000/javascript-logo.png",
          porcentage: "80%",
          value: "80",
        },
        {
          id: "SQLite_skill",
          content: "SQLite",
          image: "https://img.icons8.com/wired/64/000000/javascript-logo.png",
          porcentage: "80%",
          value: "80",
        },
      ],
      skillsBackEnd: [
        {
          id: "NodeJS_skill",
          image: "https://img.icons8.com/wired/64/000000/javascript-logo.png",
          content: "Node",
          porcentage: "90%",
          value: "90",
        },
        {
          id: "C#_skill",
          content: "C#",
          image: "https://img.icons8.com/wired/64/000000/javascript-logo.png",
          porcentage: "70%",
          value: "70",
        },
        {
          id: "FB-CloudFunctions_skill",
          content: "Firebase Functions",
          image: "https://img.icons8.com/wired/64/000000/javascript-logo.png",
          porcentage: "70%",
          value: "70",
        },
        {
          id: "AZ-CloudFunctions_skill",
          content: "Azure Functions",
          image: "https://img.icons8.com/wired/64/000000/javascript-logo.png",
          porcentage: "70%",
          value: "70",
        },
      ],
      skillsCloud: [
        {
          id: "Firebase_skill",
          image: "https://img.icons8.com/wired/64/000000/javascript-logo.png",
          content: "Firebase",
          porcentage: "90%",
          value: "90",
        },
        {
          id: "Azure_skill",
          content: "Azure",
          image: "https://img.icons8.com/wired/64/000000/javascript-logo.png",
          porcentage: "70%",
          value: "70",
        },
        {
          id: "GitHub_skill",
          content: "GitHub",
          image: "https://img.icons8.com/wired/64/000000/javascript-logo.png",
          porcentage: "80%",
          value: "80",
        },
        {
          id: "GitLab_skill",
          content: "GitLab",
          image: "https://img.icons8.com/wired/64/000000/javascript-logo.png",
          porcentage: "75%",
          value: "75",
        },
        {
          id: "BitBucket_skill",
          content: "BitBucket",
          image: "https://img.icons8.com/wired/64/000000/javascript-logo.png",
          porcentage: "75%",
          value: "75",
        },
        {
          id: "CodeMagic_skill",
          content: "CodeMagic",
          image: "https://img.icons8.com/wired/64/000000/javascript-logo.png",
          porcentage: "75%",
          value: "75",
        },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Software developer with full-stack profile orientated to .Net technologies for the back-end, Angular on the front-end and finally Flutter when build something for mobile. Have experience working with different kind of projects from scratch and giving support. Technical capacities and good skills to work with big and small teams always following best practices. Knowledge with deployments, managing continuous integration and continuous deployments. Always trying to improve as a person and as a software developer.",
        },
        // {
        //   id: "second-p-about",
        //   content:
        //     "Lorem ipsum pariatur consectetur laboris occaecat nulla aliqua irure ad deserunt duis. Eiusmod nulla cupidatat labore sint sit aute dolore irure nostrud ut incididunt. Anim laborum reprehenderit labore magna ut dolore quis irure. Labore ea duis deserunt ullamco irure fugiat deserunt ut nisi ea minim proident. Nisi consectetur do non magna duis aliqua minim minim veniam. In occaecat minim qui consequat elit mollit consectetur non id tempor. Amet adipisicing occaecat tempor culpa quis est duis.",
        // },
        // {
        //   id: "third-p-about",
        //   content:
        //     "Lorem ipsum pariatur consectetur laboris occaecat nulla aliqua irure ad deserunt duis. Eiusmod nulla cupidatat labore sint sit aute dolore irure nostrud ut incididunt. Anim laborum reprehenderit labore magna ut dolore quis irure. Labore ea duis deserunt ullamco irure fugiat deserunt ut nisi ea minim proident. Nisi consectetur do non magna duis aliqua minim minim veniam. In occaecat minim qui consequat elit mollit consectetur non id tempor. Amet adipisicing occaecat tempor culpa quis est duis.",
        // },
      ],
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <h4>FrontEnd</h4>
                    <div className="skill-mf">
                      {this.state.skills.map((skill) => {
                        return (
                          <React.Fragment key={skill.id}>
                            <div className="chip">{skill.content}</div>{" "}
                          </React.Fragment>
                        );
                      })}
                    </div>
                    <h4>BackEnd</h4>
                    <div className="skill-mf">
                      {this.state.skillsBackEnd.map((skill1) => {
                        return (
                          <React.Fragment key={skill1.id}>
                            <div className="chip">{skill1.content}</div>{" "}
                          </React.Fragment>
                        );
                      })}
                    </div>
                    <h4>Mobile</h4>
                    <div className="skill-mf">
                      {this.state.skillsMobile.map((skill) => {
                        return (
                          <React.Fragment key={skill.id}>
                            <div className="chip">
                              {skill.content}
                            </div>{" "}
                          </React.Fragment>
                        );
                      })}
                    </div>
                    <h4>Databases</h4>
                    <div className="skill-mf">
                      
                      {this.state.skillsDB.map((skill2) => {
                        return (
                          <React.Fragment key={skill2.id}>
                            <div className="chip">
                              {skill2.content}
                            </div>{" "}
                          </React.Fragment>
                        );
                      })}
                    </div>
                    <h4>Cloud</h4>
                    <div className="skill-mf">
                      {this.state.skillsCloud.map((skill3) => {
                        return (
                          <React.Fragment key={skill3.id}>
                            <div className="chip">
                              {skill3.content}
                            </div>{" "}
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">Techs</h5>
                      </div>
                      {this.state.about_me.map((content) => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

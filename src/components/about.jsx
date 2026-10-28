import mePhoto from "../img/profile.jpg";

// Copy taken from CV_Marcos_Casor_2026.md (Summary + Core skills). Replaced the
// previous generic boilerplate ("Full-Stack Mastery", "Team Player") with the
// concrete record: the migrations, the pipelines, the products, the teaching.
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
                        Senior .NET backend engineer, working with .NET since 2011: consultancies, a
                        bank, two oil companies and two products of my own. I studied{" "}
                        <a href="https://www.cervantes.edu.ar/">
                          <b>Analista en Sistemas Informáticos</b>
                        </a>{" "}
                        at Cervantes Institute.
                      </div>
                    </div>
                    Right now I am at Chevron, writing C#/.NET backend services, Azure Functions for
                    background processing, and the Azure DevOps pipelines that ship them. I also look
                    after the team&apos;s Angular applications.
                    <br />
                    <br />
                    What I like most is taking a system nobody wants to touch and leaving it in a state
                    where the team can work without fear. I moved .NET Framework 4.0 to 4.8 with all the
                    Entity Framework dependencies riding along, and took Xamarin code to MAUI. None of
                    that is glamorous. It is the work that keeps a product alive.
                    <br />
                    <br />
                    These days I am putting hours into LLM applications: RAG, agent orchestration,
                    Python. Still learning, and I would rather say so.
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
                    <b>Modernizing what is stuck:</b> .NET Framework 4.0 to 4.8 with its Entity Framework
                    dependencies, Xamarin to .NET MAUI, Angular 12 to 14 on my own product.
                    <br />
                    <b>Owning delivery:</b> Azure DevOps pipelines end to end plus the pull-request and
                    branching rules the team follows at Chevron; GitHub Actions shipping a new version
                    every Friday at Grape Software.
                    <br />
                    <b>Leading without the title:</b> most senior developer on a three-person team,
                    reviewing pull requests and setting the quality bar for the core system.
                    <br />
                    <b>Teaching:</b> two years at Institución Cervantes (Mobile Development with Flutter,
                    Web Programming with .NET Core and React) and introductory programming at Escuelas
                    PROA.
                    <br />
                    <b>Building products:</b> QuieroCuentos and EnSierrasChicas, designed and shipped end
                    to end.
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

import {
  skillsFrontend,
  skillsBackend,
  skillsMobile,
  skillsData,
  skillsCloud,
  skillsExploring,
} from '../data/skills';

// Rendered as tags, not progress bars: see the note in src/data/skills.js.
function SkillGroup({ title, items }) {
  return (
    <>
      <h4>{title}</h4>
      <div className="skill-mf">
        {items.map((item) => (
          <div className="chip" key={item}>
            {item}
          </div>
        ))}
      </div>
    </>
  );
}

function Stack() {
  return (
    <section id="stack" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="col-sm-12">
          <div className="row">
            <div className="title-box-2">
              <h5 className="title-left color-titles mb-4">Stack I use</h5>

              <SkillGroup title="Frontend" items={skillsFrontend} />
              <SkillGroup title="Backend" items={skillsBackend} />
              <SkillGroup title="Mobile" items={skillsMobile} />
              <SkillGroup title="Data" items={skillsData} />
              <SkillGroup title="Cloud, CI/CD &amp; Repos" items={skillsCloud} />
              <SkillGroup title="Currently exploring" items={skillsExploring} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stack;

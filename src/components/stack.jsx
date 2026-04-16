import React from 'react';
import { skills, skillsAI, skillsMobile, skillsDB, skillsBackEnd, skillsCICD } from '../data/skills';

function Stack() {
  return (
    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="col-sm-12">
          <div className="row">
            <div className="title-box-2">
              <h5 className="title-left color-titles mb-4">Stack I use</h5>

              <h4>Frontend</h4>
              <div className="skill-mf">
                {skills.map((skill) => (
                  <React.Fragment key={skill.id}>
                    <div className="chip">{skill.content}</div>{' '}
                  </React.Fragment>
                ))}
              </div>

              <h4>Backend</h4>
              <div className="skill-mf">
                {skillsBackEnd.map((skill) => (
                  <React.Fragment key={skill.id}>
                    <div className="chip">{skill.content}</div>{' '}
                  </React.Fragment>
                ))}
              </div>

              <h4>Mobile</h4>
              <div className="skill-mf">
                {skillsMobile.map((skill) => (
                  <React.Fragment key={skill.id}>
                    <div className="chip">{skill.content}</div>{' '}
                  </React.Fragment>
                ))}
              </div>

              <h4>Databases</h4>
              <div className="skill-mf">
                {skillsDB.map((skill) => (
                  <React.Fragment key={skill.id}>
                    <div className="chip">{skill.content}</div>{' '}
                  </React.Fragment>
                ))}
              </div>

              <h4>Cloud - CI/CD &amp; Repos</h4>
              <div className="skill-mf">
                {skillsCICD.map((skill) => (
                  <React.Fragment key={skill.id}>
                    <div className="chip">{skill.content}</div>{' '}
                  </React.Fragment>
                ))}
              </div>

              <h4>IA</h4>
              <div className="skill-mf">
                {skillsAI.map((skill) => (
                  <React.Fragment key={skill.id}>
                    <div className="chip">{skill.content}</div>{' '}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stack;

import React from "react";

function Skills() {
  return (
    <div id="primary">
      <div id="skills" className="skills-container">
        <h2>TOOLBELT.</h2>

        <div className="grid-container">
          <ul className="skills-list">
            <li>
              {" "}
              Frontend:<br></br>
              <h4 className="h4top">
                <i className="fab fa-js-square skills"></i>JavaScript
              </h4>
              <h4>
                <i className="fab fa-react skills"></i>React
              </h4>
              <h4>Typescript</h4>
              <h4>GraphQL</h4>
              <h4>jQuery</h4>
              <h4>
                <i className="fab fa-html5 skills"></i>HTML5
              </h4>
              <h4>
                <i className="fab fa-css3-alt skills"></i>CSS3
              </h4>
            </li>
            <li>
              Backend:<br></br>
              <h4 className="h4top">
                <i className="fab fa-python skills"></i>Python
              </h4>
              <h4>Flask</h4>
              <h4>
                <i className="fab fa-node skills"></i>Node.js/ <br />
                <h4>Express.js</h4>
              </h4>
              <h4>Django</h4>
            </li>
            <li>
              Testing:<br></br>
              <h4 className="h4top">Unittest</h4>
              <h4>Cypress</h4>
              <h4>Jest</h4>
            </li>
            <li>
              DB:<br></br>
              <h4 className="h4top">PostgreSQL</h4>
              <h4>mySQL</h4>
              <h4>MongoDB</h4>
            </li>
            <li>
              Collaboration:<br></br>
              <h4 className="h4top">
                <i className="fab fa-github skills"></i>GitHub
              </h4>
              <h4>Linear</h4>
              <h4>Jira</h4>
              <h4>Lattice</h4>
              <h4>Notion</h4>
              {/* <h4>
                <i className="fab fa-sourcetree skills"></i>Sourcetree
              </h4> */}
            </li>
            <li>
              AWS:<br></br>
              <h4 className="h4top">S3</h4>
              <h4>EC2</h4>
              <h4>Lambdas</h4>
              <h4>Kinesis</h4>
              {/* <h4>
                <i className="fab fa-sourcetree skills"></i>Sourcetree
              </h4> */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;

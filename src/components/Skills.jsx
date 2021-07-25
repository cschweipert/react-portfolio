import React from "react";

function Skills() {
  return <div id="primary">
    <div id="skills" className="skills-container">
      <h2>TOOLBELT.</h2>

      <div className="grid-container">
        <ul className="skills-list">
          <li> Web languages and technologies:<br></br>
            <h4 className="h4top"><i className="fab fa-js-square skills"></i>JavaScript</h4>
            <h4>Typescript</h4>
            <h4><i className="fab fa-node skills"></i>Node.js</h4>
            <h4><i className="fab fa-html5 skills"></i>HTML5</h4>
            <h4><i className="fab fa-css3-alt skills"></i>CSS3</h4>
            <h4><i className="fab fa-bootstrap skills"></i>Bootstrap</h4>
          </li>
          <li>Libraries:<br></br>
            <h4 className="h4top"><i className="fab fa-react skills"></i>React</h4>
            <h4>jQuery</h4>
            <h4>GraphQL</h4>
          </li>
          <li>Programming languages:<br></br>
            <h4 className="h4top"><i className="fab fa-python skills"></i>Python</h4>
          </li>
          <li>Frameworks:<br></br>
            <h4 className="h4top">Express.js</h4>
            <h4>Flask</h4>
            <h4>Django</h4>
          </li>
          <li>Testing:<br></br>
            <h4 className="h4top">Jest</h4>
            <h4>Cypress</h4>
          </li>
          <li>Version Control:<br></br>
            <h4 className="h4top"><i className="fab fa-github skills"></i>GitHub</h4>
            <h4><i className="fab fa-sourcetree skills"></i>Sourcetree</h4>
          </li>
          <li>Databases:<br></br>
            <h4 className="h4top">MongoDB</h4>
            <h4>PostgreSQL</h4>
          </li>
        </ul>
      </div>
    </div>
  </div>
}

export default Skills;
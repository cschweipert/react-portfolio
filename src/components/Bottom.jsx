import React from "react";

function Bottom() {
  return (
    <div className="bottom-container">
      <a href="https://github.com/cschweipert">
        <i
          className="fab fa-github fa-2x socialicon"
          title="icon link to github account"
        ></i>
      </a>
      <a href="mailto:c.schweipert@gmail.com">
        <i
          className="fas fa-envelope fa-2x socialicon"
          title="icon link to mail"
        ></i>
      </a>
      <a href="https://www.linkedin.com/in/christina-schweipert/">
        <i
          className="fab fa-linkedin fa-2x socialicon"
          title="icon link to linkedin"
        ></i>
        <br></br>
        <br></br>
      </a>
      <a href="#projects">
        <i
          className="fas fa-angle-double-up fa-1x uparrow"
          title="link to top"
        ></i>
        {/* <i
          className="fa-solid fa-circle-arrow-up socialicon"
          title="link to top"
        ></i> */}
      </a>
    </div>
  );
}

export default Bottom;

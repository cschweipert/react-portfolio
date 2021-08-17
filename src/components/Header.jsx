import React from "react";

function Header() {
  return (
    <header>
      <nav id="myTopnav" class="navbar navbar-expand-lg mynav">
        <div class="container-fluid">
          {/* <a class="navbar-brand" href="#About">Christina Schweipert</a> */}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="fas fa-bars hamburger"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#projects">
                  PROJECTS
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#skills">
                  TOOLBELT
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#about"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  ABOUT
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="./resume/resume_christinaschweipert.pdf"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  RESUME
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="mailto:c.schweipert@gmail.com"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  GET IN TOUCH
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

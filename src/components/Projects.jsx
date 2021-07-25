import React from "react";

function Projects() {
  return <div id="primary">
    <div id="projects" class="container">
      <h2>PROJECTS.</h2>
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <div class="listing-heading text-center">
                <h3>Warbler</h3>
              </div>
              <hr></hr>
              <div class="row techrow">
                <h4 className="tech">Python, Flask, Jinja, PostgreSQL</h4>
                {/* <div class="col-6">
                  <i class="fab fa-python"></i> Python</div>
                <div class="col-6">
                  <i class=""></i> Flask</div>
              </div>
              <div class="row">
                <div class="col-6">
                  Jinja</div>
                <div class="col-6">
                  PostgreSQL</div> */}
              </div>
              <div>
                <p className="project-p">A Twitter clone with a Flask/ PostgreSQL backend and JS with Jinja templates in the front.<br></br>
                  Authentication: User sign up, user login, delete user profile<br></br>
                  Authorization: An authorized user can follow/ unfollow other users
                  An authorized user can like/ unlike warbels (tweets) of followed users but not their own.
                  An authorized user can edit their profile.
                </p>
                <h3><a class="gitlink" href="https://github.com/cschweipert/flask-warbler"><i class="fab fa-github"></i></a></h3>
              </div>
            </div>
            <a href="https://christina-warbler.herokuapp.com" class="warblerBtn" title="Link to warbler app"> </a>
          </div>
        </div>
      </div>

      {/* <div class="col">
          <div class="card">
            <div class="card-body">
              <div class="listing-heading text-center">
                <h3>Fruit share. Happy bear. <a class="gitlink" href="https://github.com/cschweipert/fruitshare"><i
                  class="fab fa-github"></i></a></h3>
              </div>
              <hr></hr>
              <div class="row">
                <div class="col-6">
                  <i class="fab fa-js-square"></i> JavaScript</div>
                <div class="col-6">
                  <i class="fab fa-node"></i> Node/ Express</div>
              </div>
              <div class="row">
                <div class="col-6">
                  Esri API</div>
                <div class="col-6">
                  MongoDB</div>
              </div>
              <div>
                <p className="project-p">A fruitsharing app built with Node.js, Express, EJS, MongoDB with mongoose and the ESRI JS API. 
                This project was inpired by bears. I live in a small mountain town in the foothills of the San Juans in Colorado. 
                We love our bears and want to keep them safe. If we don't have time to pick our fruit, the bears will come to town 
                to pick it for us. That's not safe for bears or humans. The idea of this project is that fruit tree owners can put 
                their trees on a map for others to see so they can get help to pick the fruit. Everybear wins. If the user clicks 
                on the points, a popup will inform her about the type of fruit and location. This app was built with ❤︎ and the 
                help of Node Express, EJS, MongoDB and the Esri JavaScript API. 
                </p>
              </div>
            </div>
            <a href="https://bearsmart.herokuapp.com" class="projectBtn" title="Link to fruitsharing app"> </a>
          </div>
        </div> */}

      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <div class="listing-heading text-center">
                <h3>Real Estate Website</h3>
              </div>
              <hr></hr>
              <div class="row techrow">
                <h4 className="tech">Python, Django, Jinja, PostgreSQL, MLS PLugin</h4>
                {/* <div class="col-6">
                  <i class="fab fa-python"></i> Python</div>
                <div class="col-6">
                  <i class=""></i> Django</div>
              </div>
              <div class="row py-2 text-secondary">
                <div class="col-6">
                  MLS Plugin</div>
                <div class="col-6">
                  PostgreSQL</div> */}
              </div>
              <div>
                <p className="project-p">A real estate website for a local real estate agency. <br />
                  A Python-Django app with a PostgreSQL database. <br />
                  Agents can login into the admin area and edit, update and delete real estate listings.
                </p>
                <h3><a class="gitlink" href="https://github.com/cschweipert/django-horizon-property"><i class="fab fa-github"></i></a></h3>
              </div>
            </div>
            <a href="http://horizondurango.com/" class="horizonBtn" title="Link button to fruitshare webapp"> </a>
          </div>
        </div>
      </div>
    </div>
  </div>

}

export default Projects;
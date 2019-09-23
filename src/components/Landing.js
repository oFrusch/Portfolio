import React from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends React.Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src="betterme.jpg" alt="avatar" className="avatar-img" />

            <div className="banner-text">
              <h1>Owen Carpenter</h1>
              <h2>Software Engineer</h2>
              <hr />

              <p>
                Python | Java | JavaScript | React | Node.js | Jenkins | MongoDB
                | SQL
              </p>

              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/owen-carpenter-68053316b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>

                <a
                  href="https://github.com/oFrusch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github-square" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;

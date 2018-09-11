import React, { Component } from "react";

class Team extends Component {
  render() {
    return (
      <div>
        <div className="team">
          <div className="team-grid">
            <div id="figure" className="fig profile">
              <img src="assets/chris.jpg" alt="Christian Cosio" />
              <div>
                <h2>Christian</h2>
              </div>
            </div>

            <div id="figure" className="fig profile">
              <img src="assets/ozzy.jpg" alt="Oswaldo Ortiz" />
              <div>
                <h2>Oswaldo</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="us-box">
          <div className="us-grid">
            <h6 className="text-1">Founder & Strategy Director</h6>
            <h6 className="text-1">Co-founder & Creative Director</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;

import React, { Component } from "react";

class Team extends Component {
  render() {
    return (
      <div>
        <div className="team">
          <div className="team-grid">
            <div id="figure" className="fig profile">
              <img src="assets/chris.jpg" alt="sample33" />
              <div>
                <h2>Christian</h2>
              </div>
              <a href="#" />
            </div>

            <div id="figure" className="fig profile">
              <img src="assets/ozzy.jpg" alt="sample33" />
              <div>
                <h2>Oswaldo</h2>
              </div>
              <a href="#" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;

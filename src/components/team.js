import React, { Component } from "react";

class Team extends Component {
  render() {
    return (
      <div>
        <div className="team">
          <div className="team-grid">
            <div id="figure" onclick="" className="fig profile">
              <img src="assets/chris.jpg" alt="sample33" />
              <div>
                <h2>
                  Christian
                  
                </h2>
              </div>
              <a href="#" />
            </div>

            <div id="figure" className="fig profile">
              <img src="assets/ozzy.jpg" alt="sample33" />
              <div>
                <h2>
                  Oswaldo
                  
                </h2>
              </div>
              <a href="#" />
            </div>
            

            <div id="figure" className="fig profile">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample33.jpg"
                alt="sample33"
              />
              <div>
                <h2>
                  Manny
                 
                </h2>
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

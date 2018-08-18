import React, { Component } from 'react';

class Cards extends Component {
    render() {
        return (
            <div>
                {/* cards */}

        <div className="card-space">
          <div class="row">
            <article class="col-xs-4">
              <div class="cards">
                <div className="image-box">
                  <img src="assets/smartphone.png" />
                </div>
                <hr class="divider" />
                <h2 class="title">RESPONSIVE WEBDESIGN</h2>
                <div class="info">
                  <hr class="divider" />
                  <p class="lead">
                    We think in a cross-medial way, to be able to assist you in
                    all facets of media. We design and program our websites,
                    incorporating the latest trends and techniques. We think for
                    example of responsive sites to be able to serve your visitor
                    on every platform, from mobile to PC.
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="card-division" />
          <div className="row1">
            <article class="col-xs-41">
              <div class="cards1">
                <div className="image-box1">
                  <img src="assets/computer.png" />
                </div>
                <hr class="divider1" />
                <h2 class="title1">EFFECTIVE MARKETING</h2>
                <div class="info1">
                  <hr class="divider1" />
                  <p class="lead1">
                    Are you ready to see the next page and be amazed of what you
                    can find?
                  </p>
                </div>
              </div>
            </article>
          </div>

          <div className="card-division" />
          <div className="row2">
            <article class="col-xs-4">
              <div class="cards">
                <div className="image-box">
                  <img src="assets/photo-camera.png" />
                </div>
                <hr class="divider" />
                <h2 class="title">ORIGINAL PHOTOS</h2>
                <div class="info">
                  <hr class="divider" />
                  <p class="lead">
                    Are you ready to go to the next page and be amazed of what
                    you can find?
                  </p>
                </div>
              </div>
            </article>
          </div>

          <div className="card-division" />
          <div className="row3">
            <article class="col-xs-41">
              <div class="cards1">
                <div className="image-box">
                  <img src="assets/camcorder.png" />
                </div>
                <hr class="divider1" />
                <h2 class="title1">CUSTOM FILM</h2>
                <div class="info1">
                  <hr class="divider1" />
                  <p class="lead1">
                    Are you ready to go to the next page and be amazed of what
                    you can find?
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
        {/* cards */}

        
            </div>
        );
    }
}

export default Cards;

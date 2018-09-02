import React, { Component } from "react";
import $ from "jquery";

class Mobile extends Component {
  render() {
    //Nav Component

    $(document).ready(function() {
      var menu = "close";
      $(".mobile-one .menu-toggle, .mobile-three .menu-toggle").click(
        function() {
          if (menu === "close") {
            $(this)
              .parent()
              .next(".mobile-nav")
              .css("transform", "translate(0, 0)");
            menu = "open";
          } else {
            $(this)
              .parent()
              .next(".mobile-nav")
              .css("transform", "translate(-100%, 0)");
            menu = "close";
          }
        }
      );
    });

    //Nav Component
    return (
      <div className="mobile-wrapper">
        {/* Header Section */}

        <div className="mobile mobile-one">
          <div className="mobile-header">
            <div className="menu-toggle">
              <div className="line" />
              <div className="line" />
            </div>
          </div>
          <div className="mobile-nav">
            <ul>
              <li>
                <a href="#">
                  <img src="/assets/wbt_logo.png" alt="WBT Logo" />
                </a>
              </li>
              <li>
                <a href="#">Technology</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Hero Section */}

        <div className="mobile-hero">
          <div className="mobile-hero-grid">
            <div className="mobile-hero-logo">
              <img src="/assets/wbt_logo.png" alt="WBT Logo" />
            </div>
            <div className="mobile-hero-scroll">
              <img src="/assets/arrow.gif" alt="Scroll Down" />
            </div>
          </div>
        </div>

        {/* Technology Section */}

        <div className="mobile-techno">
          <div className="mobile-techno-grid">
            <div id="mobile-tech-1" className="mobile-tech">
              <img src="assets/smartphone.png" />
              <h1>RESPONSIVE WEBDESIGN</h1>
              <p>
                We think in a cross-medial way, to be able to assist you in all
                facets of media. We design and program our websites,
                incorporating the latest trends and techniques. We think for
                example of responsive sites to be able to serve your visitor on
                every platform, from mobile to PC.
              </p>
            </div>
            <div className="mobile-tech">
              <img src="assets/computer.png" />
              <h1>EFFECTIVE MARKETING</h1>
              <p>
                With our extensive knowledge on marketing, we device strategies
                tailored to fit your company's vision and needs. By keeping up
                with the up and coming technologies, we can assure the quality
                of work put into circulating your presence, is strong and
                impactful.
              </p>
            </div>
            <div className="mobile-tech">
              <img src="assets/photo-camera.png" />
              <h1>ORIGINAL PHOTOS</h1>
              <p>
                Being artists, we can provide unique and tasteful images, that
                will allow your company to stand out in a competitive
                environment. We shoot team portraits, office spaces, buildings,
                landscapes, you name it. All in RAW format to maximize
                malleability.
              </p>
            </div>
            <div className="mobile-tech">
              <img src="assets/camcorder.png" />
              <h1>CUSTOM FILM</h1>
              <p>
                Want to make your website more dynamic? Why not implement a
                video into your site! Movement has the power to add a sense of
                depth into your website, also, makes the experience more
                memorable which can and will separate you from the pack.
              </p>
            </div>
          </div>
        </div>

        {/* Spacer */}

        {/* <div className="mobile-spacer">
          <div className="mobile-spacer-content">
            <h1>TEAM</h1>
            <p>MEET THE TEAM</p>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Mobile;

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
      </div>
    );
  }
}

export default Mobile;

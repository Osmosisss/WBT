import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div class="wrapper">
        <div class="menu-container">
          <div class="menu">
            <div class="bar" />
            <div class="bar" />
            <div class="bar" />
          </div>

          <div class="wrapper-list">
            <ul class="menu-list">
              <li class="list">
                <h1>Home</h1>
              </li>
              <li class="list">
                <h1>Technologies</h1>
              </li>
              <li class="list">
                <h1>Product</h1>
              </li>
              <li class="list">
                <h1>Contact</h1>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

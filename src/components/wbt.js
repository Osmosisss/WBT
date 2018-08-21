import React, { Component } from "react";
import Form from "./form";
// import Header from "./header";

class WBT extends Component {
  render() {
    var TxtRotate = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = "";
      this.tick();
      this.isDeleting = false;
    };

    TxtRotate.prototype.tick = function() {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

      var that = this;
      var delta = 300 - Math.random() * 100;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(function() {
        that.tick();
      }, delta);
    };

    window.onload = function() {
      var elements = document.getElementsByClassName("txt-rotate");
      for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute("data-rotate");
        var period = elements[i].getAttribute("data-period");
        if (toRotate) {
          new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #667 }";
      document.body.appendChild(css);
    };

    return (
      <div className="universal">
        {/* header component */}

        {/* <Header/> */}

        <div className="header">
          <div className="header-logo">
            {/* <img src="/assets/wbt_logo.png" alt="WBT Logo" /> */}
          </div>
          <div className="header-links">
            <a className="links" href="#">
              HOME
            </a>
            <a className="links" href="#">
              TECHNOLOGY
            </a>
            <a className="links" href="#">
              PORTFOLIO
            </a>
            <a className="links" href="#">
              CONTACT
            </a>
          </div>
        </div>
        {/* hero image style for logo showcase */}
        <div className="hero">
          <div className="hero-logo">
            <img src="/assets/wbt_logo.png" alt="WBT" />

            {/* This is the magic text code */}
            <div className="space">
              <div className="magicspace" />
              <h1 className="magictext">
                <span
                  className="txt-rotate"
                  data-period="2000"
                  data-rotate="[ &quot;Hello, this is Christian and Oswaldo&quot;,
            &quot;Greeting you from an automated JS program&quot;, 
            &quot;We hope to create a utopian experience while working with you&quot;,
             &quot;www.webbuilderteam.com&quot;, &quot; &quot; ]"
                />
              </h1>
            </div>
          </div>
          {/* End of my thingy megigle */}

          {/* Desktop scroll arrow */}
          <div className="hero-gif">
            <a href="#">
              <img src="/assets/arrow.gif" alt="Scroll Down" />
            </a>
          </div>
        </div>

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
                    With our extensive knowledge on marketing, we device
                    strategies tailored to fit your company's vision and needs.
                    By keeping up with the up and coming technologies, we can
                    assure the quality of work put into circulating your
                    presence, is strong and impactful.
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
                    Being artists, we can provide unique and tasteful images,
                    that will allow your company to stand out in a competitive
                    environment. We shoot team portraits, office spaces,
                    buildings, landscapes, you name it. All in RAW format to
                    maximize malleability.
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
                    Want to make your website more dynamic? Why not implement a
                    video into your site! Movement has the power to add a sense
                    of depth into your website, also, makes the experience more
                    memorable which can and will separate you from the pack.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
        {/* cards */}

        {/* technologies container */}
        <div className="techno-grid">
          <div className="techno-box">
            <img src="assets/smartphone.png" />
            <h1>RESPONSIVE WEBDESIGN</h1>
            <p>
              We think in a cross-medial way, to be able to assist you in all
              facets of media. We design and program our websites, incorporating
              the latest trends and techniques. We think for example of
              responsive sites to be able to serve your visitor on every
              platform, from mobile to PC.
            </p>
          </div>
          <div className="techno-box">
            <img src="assets/computer.png" />
            <h1>EFFECTIVE MARKETING</h1>
            <p>
              With our extensive knowledge on marketing, we device strategies
              tailored to fit your company's vision and needs. By keeping up
              with the up and coming technologies, we can assure the quality of
              work put into circulating your presence, is strong and impactful.
            </p>
          </div>
          <div className="techno-box">
            <img src="assets/photo-camera.png" />
            <h1>ORIGINAL PHOTOS</h1>
            <p>
              Being artists, we can provide unique and tasteful images, that
              will allow your company to stand out in a competitive environment.
              We shoot team portraits, office spaces, buildings, landscapes, you
              name it. All in RAW format to maximize malleability.
            </p>
          </div>
          <div className="techno-box">
            <img src="assets/camcorder.png" />
            <h1>CUSTOM FILM</h1>
            <p>
              Want to make your website more dynamic? Why not implement a video
              into your site! Movement has the power to add a sense of depth
              into your website, also, makes the experience more memorable which
              can and will separate you from the pack.
            </p>
          </div>
        </div>
        {/* about spacer */}
        <div className="spacer">
          <div className="spacer-text">
            <h1>TEAM</h1>
            <h2>MEET THE TEAM</h2>
          </div>
        </div>
        {/* about the team */}
        <div className="team">
          {/* team photos project */}
          <div className="team-grid">
            {/* Fig Box Chris      */}
            <div className="profile">
              <div className="fig-box">
                <figure class="fig yellow">
                  <img src="/assets/Chris.jpg" alt="Chris" />
                  <figname>
                    <h2>
                      Chris
                      <span />
                    </h2>
                  </figname>
                  <a href="#" />
                </figure>
              </div>
              <h4>CHRISTIAN COSIO</h4>
              <p>Strategy Director & Founder</p>
            </div>
            {/* Fig Box Osmosisss */}
            <div className="profile">
              <div className="fig-box">
                <figure class="fig yellow">
                  <img src="/assets/selfie.jpg" alt="Chris" />
                  <figname>
                    <h2>
                      Ozzy
                      <span />
                    </h2>
                  </figname>
                  <a href="#" />
                </figure>
              </div>
              <h4>OSWALDO AROLDO ORTIZ</h4>
              <p>Creative Director & Founder</p>
            </div>
            <div className="profile">
              {/* Fig Box Dan */}
              <div className="fig-box">
                <figure class="fig yellow">
                  <img src="/assets/dan.jpg" alt="Chris" />
                  <figname>
                    <h2>
                      Dan
                      <span />
                    </h2>
                  </figname>
                  <a href="#" />
                </figure>
              </div>
              <h4>Dan Ottesen</h4>
              <p>Full-Stack Web Developer</p>
            </div>
          </div>
        </div>
        {/* portfolio spacer */}
        <div className="spacer">
          <div className="spacer-text">
            <h1>PORTFOLIO</h1>
            <h2>A SELECTION FROM OUR WORK</h2>
          </div>
        </div>
        {/* portfolio showcase */}
        <div className="portfolio">
          <div class="portfolio-wrapper">
            <div class="portfolio-media">
              <div class="portfolio-layer">
                <a href="www.komeparnell.com" target="_blank">
                  <p>+ Kome Parnell</p>
                </a>
              </div>
              <img src="/assets/folio1.jpg" alt="" />
            </div>
            <div class="portfolio-media">
              <div class="portfolio-layer">
                <a href="www.trippyroads.com" target="_blank">
                  <p>+ Trippy Roads</p>
                </a>
              </div>
              <img src="/assets/folio1.jpg" alt="" />
            </div>
          </div>
        </div>
        {/* contact spacer */}
        <div className="spacer">
          <div className="spacer-text">
            <h1>CONTACT</h1>
            <h2>FEEL FREE TO REACH OUT</h2>
          </div>
        </div>
        {/* contact form */}
        <Form />
        {/* footer spacer */}
        <div className="spacer-last">
          <div className="spacer-text-last">
            <p>&copy; WBT 2018 All rights reserved</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WBT;

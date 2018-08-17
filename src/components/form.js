import React, { Component } from "react";

class Form extends Component {
  render() {
    var map;

    function initialize() {
      var myLatlng = new google.maps.LatLng(-25.363882, 131.044922);
      var mapOptions = {
        zoom: 4,
        center: myLatlng
      };
      map = new google.maps.Map(
        document.getElementById("map-canvas"),
        mapOptions
      );

      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Hello World!"
      });
    }

    google.maps.event.addDomListener(window, "load", initialize);
    return (
      <div className="form">
        <form className="form" action="/action_page.php">
          <div className="form-grid">
            <div className="form-name">
              <label for="name">Name</label>
              <input type="name" className="form-control" id="name" />
            </div>
            <div className="form-email">
              <label for="email">Email address</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-phone">
              <label for="pwd">Phone</label>
              <input type="phone" className="form-control" id="phone" />
            </div>
            <div className="form-comp">
              <label for="pwd">Company Name (Optional)</label>
              <input type="comp" className="form-control" id="comp" />
            </div>
            <div className="form-message">
              <textarea
                className="form-control"
                name="message"
                rows="4"
                cols="90"
              />
            </div>
            <button type="submit" className="btn btn-default">
              Send
            </button>
          </div>
        </form>
        <div id="map-canvas" />
      </div>
    );
  }
}

export default Form;

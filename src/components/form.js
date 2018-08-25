import React, { Component } from "react";

class Form extends Component {
  render() {
    var map;

    function initialize() {
      var myLatlng = new google.maps.LatLng(40.500818, -111.422485);
      var mapOptions = {
        zoom: 15,
        center: myLatlng
      };
      map = new google.maps.Map(
        document.getElementById("map-canvas"),
        mapOptions
      );

      marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Hello World!"
      });
    }

    google.maps.event.addDomListener(window, "load", initialize);
    return (
      <div className="form">
        <form className="form" action="/contact.php">
          <div className="form-grid">
            <div className="form-name">
              <label for="name">Name</label>
              <input type="name" className="form-control" id="name" />
            </div>
            <div className="form-email">
              <label for="mail">Email address</label>
              <input type="mail" className="form-control" id="mail" />
            </div>
            <div className="form-phone">
              <label for="pwd">Phone</label>
              <input type="phone" className="form-control" id="phone" />
            </div>
            <div className="form-message">
              <textarea
                className="form-control"
                name="message"
                rows="5"
                cols="90"
                placeholder="Message"
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

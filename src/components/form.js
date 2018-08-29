import React, { Component } from "react";

class Form extends Component {
  render() {
    // var map;

    // function initialize() {
    //   var myLatlng = new google.maps.LatLng(32.71959, -117.165894);
    //   var mapOptions = {
    //     zoom: 11,
    //     center: myLatlng,
    //     styles: [
    //       { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
    //       {
    //         elementType: "labels.text.stroke",
    //         stylers: [{ color: "#242f3e" }]
    //       },
    //       { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
    //       {
    //         featureType: "administrative.locality",
    //         elementType: "labels.text.fill",
    //         stylers: [{ color: "#d59563" }]
    //       },
    //       {
    //         featureType: "poi",
    //         elementType: "labels.text.fill",
    //         stylers: [{ color: "#d59563" }]
    //       },
    //       {
    //         featureType: "poi.park",
    //         elementType: "geometry",
    //         stylers: [{ color: "#263c3f" }]
    //       },
    //       {
    //         featureType: "poi.park",
    //         elementType: "labels.text.fill",
    //         stylers: [{ color: "#6b9a76" }]
    //       },
    //       {
    //         featureType: "road",
    //         elementType: "geometry",
    //         stylers: [{ color: "#38414e" }]
    //       },
    //       {
    //         featureType: "road",
    //         elementType: "geometry.stroke",
    //         stylers: [{ color: "#212a37" }]
    //       },
    //       {
    //         featureType: "road",
    //         elementType: "labels.text.fill",
    //         stylers: [{ color: "#9ca5b3" }]
    //       },
    //       {
    //         featureType: "road.highway",
    //         elementType: "geometry",
    //         stylers: [{ color: "#746855" }]
    //       },
    //       {
    //         featureType: "road.highway",
    //         elementType: "geometry.stroke",
    //         stylers: [{ color: "#1f2835" }]
    //       },
    //       {
    //         featureType: "road.highway",
    //         elementType: "labels.text.fill",
    //         stylers: [{ color: "#f3d19c" }]
    //       },
    //       {
    //         featureType: "transit",
    //         elementType: "geometry",
    //         stylers: [{ color: "#2f3948" }]
    //       },
    //       {
    //         featureType: "transit.station",
    //         elementType: "labels.text.fill",
    //         stylers: [{ color: "#d59563" }]
    //       },
    //       {
    //         featureType: "water",
    //         elementType: "geometry",
    //         stylers: [{ color: "#17263c" }]
    //       },
    //       {
    //         featureType: "water",
    //         elementType: "labels.text.fill",
    //         stylers: [{ color: "#515c6d" }]
    //       },
    //       {
    //         featureType: "water",
    //         elementType: "labels.text.stroke",
    //         stylers: [{ color: "#17263c" }]
    //       }
    //     ]
    //   };
    //   map = new google.maps.Map(
    //     document.getElementById("map-canvas"),
    //     mapOptions
    //   );

    //   var marker = new google.maps.Marker({
    //     position: myLatlng,
    //     map: map
    //   });
    // }

    // google.maps.event.addDomListener(window, "load", initialize);
    return (
      <div className="form" id="contact_link">
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

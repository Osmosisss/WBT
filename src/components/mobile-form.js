import React, { Component } from "react";

class MobileForm extends Component {
  render() {
    return (
      <div className="mobile-form" id="contact_link">
        <form className="form-horizontal mobile-form-case">
          <div className="form-group">
            <label
              className="col-md-2 form-float-left"
              for="name"
              id="mobile-name"
            >
              Name
            </label>
            <div className="col-md-3">
              <input type="name" className="form-control" />
            </div>
          </div>
          <div className="form-group">
            <label
              className="col-md-2 form-float-left"
              for="mail"
              id="mobile-mail"
            >
              Email address
            </label>
            <div className="col-md-3">
              <input type="mail" className="form-control" />
            </div>
          </div>
          <div className="form-group">
            <label
              className="col-md-2 form-float-left"
              for="phone"
              id="mobile-phone"
            >
              Phone
            </label>
            <div className="col-md-3">
              <input type="phone" className="form-control" />
            </div>
          </div>
          <div className="mobile-form-message">
            <textarea
              id="mobile-comp"
              type="message"
              className="form-control"
              name="message"
              rows="5"
              cols="10"
              placeholder="Message"
            />
          </div>

          <button type="submit" className="btn btn-default">
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default MobileForm;

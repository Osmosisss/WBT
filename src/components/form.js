import React, { Component } from "react";

class Form extends Component {
  render() {
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
        <div className="form-box">
          <div className="box-grid">
            <div className="box">
              <p>yoyoyoyo</p>
            </div>
            <div className="box">
              <p>yoyoyoyo</p>
            </div>
            <div className="box">
              <p>yoyoyoyo</p>
            </div>
            <div className="box">
              <p>yoyoyoyo</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;

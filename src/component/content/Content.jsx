import React, { Component } from "react";
import "./Content.scss";

class Content extends Component {
  render() {
    return (
      <div className="content">
        <h3>OUR ICO PROJECT</h3>

        <hr className="border-hr" />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
          <br />
          et dolore magna aliqua.
        </p>
      </div>
    );
  }
}

export default Content;

import React from "react";
import { Link } from "react-router-dom";

class LinkButton extends React.Component {
  render() {
    return (
      <Link className={this.props.containerClass} to={this.props.link}>
        <button
          className={"btn rounded " + this.props.buttonClass}
          disabled={this.props.disabled}
        >
          {this.props.text}
        </button>
      </Link>
    );
  }
}

export default LinkButton;

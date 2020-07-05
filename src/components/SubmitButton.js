import React from "react";

class SubmitButton extends React.Component {
  render() {
    return (
      <div className={"submitButton " + this.props.containerClass}>
        <button
          className={"btn rounded " + this.props.buttonClass}
          disabled={this.props.disabled}
          onClick={() => this.props.onClick()}
        >
          {this.props.text}
        </button>
      </div>
    );
  }
}

export default SubmitButton;

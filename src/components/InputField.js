import React from "react";

class InputField extends React.Component {
  render() {
    return (
      <div className={"inputField " + this.props.containerClass}>
        <input
          className={"input " + this.props.inputClass}
          type={this.props.type}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={(e) => this.props.onChange(e.target.value)}
        />
      </div>
    );
  }
}

export default InputField;

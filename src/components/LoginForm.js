import React from "react";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import UserStore from "./UserStore";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      buttonDisabled: false,
    };
  }

  setInputValue(property, val) {
    val = val.trim();
    // set username and password max length
    if (val.length > 12) {
      return;
    }
    this.setState({
      [property]: val,
    });
  }

  resetForm() {
    this.setState({
      username: "",
      password: "",
      buttonDisabled: false,
    });
  }

  async doLogin() {
    if (!this.state.username) {
      return;
    }
    if (!this.state.password) {
      return;
    }
    this.setState({
      buttonDisabled: true,
    });

    try {
      let result = await fetch("/login", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        }),
      });

      let response = await result.json();
      if (response && response.success) {
        UserStore.isLoggedIn = true;
        UserStore.username = response.username;
      } else if (response && response.success === false) {
        this.resetForm();
        alert(result.msg);
      }
    } catch (e) {
      console.log(e);
      this.resetForm();
    }
  }

  render() {
    return (
      <div className="loginPage">
        <h1 className="loginTitle text-center">Portfolio Planner</h1>
        <div className="loginForm m-1">
          <div className="loginInputs w-100">
            <InputField
              type="text"
              containerClass="w-100 my-2"
              inputClass="w-100 p-1 my-1 border-left-0 border-top-0 border-right-0 border-dark"
              placeholder="Username"
              value={this.state.username ? this.state.username : ""}
              onChange={(val) => this.setInputValue("username", val)}
            />
            <InputField
              type="password"
              containerClass="w-100 my-2"
              inputClass="w-100 p-1 my-1 border-left-0 border-top-0 border-right-0 border-dark"
              placeholder="Password"
              value={this.state.password ? this.state.password : ""}
              onChange={(val) => this.setInputValue("password", val)}
            />
          </div>
          <SubmitButton
            text="Login"
            containerClass="w-100 my-1"
            buttonClass="w-100 btn-primary"
            disabled={this.state.buttonDisabled}
            onClick={() => this.doLogin()}
          />
          <SubmitButton
            text="Register"
            containerClass="w-100 my-1"
            buttonClass="w-100 btn-outline-primary"
            disabled={this.state.buttonDisabled}
            onClick={() => this.goRegister()}
          />
        </div>
      </div>
    );
  }
}

export default LoginForm;

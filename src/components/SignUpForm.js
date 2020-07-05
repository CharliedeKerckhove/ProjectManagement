class SignUpForm extends Component {
  state = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  render() {
    const { userName, email, password, confirmPassword } = this.state;
    const values = { userName, email, password, confirmPassword };

    return <div></div>;
  }
}

export default SignUpForm;
